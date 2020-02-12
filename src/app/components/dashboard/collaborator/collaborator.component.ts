import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  emailPattern =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
  image: any = sessionStorage.getItem('image');
  email: string;
  note: any;
  action: Array<any>=[];
  input:string='';

  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService, private dataService: DataService) { }

  ngOnInit() {
    // console.log(this.data);
    this.email=this.data.note.email;
    this.note = this.data.note;
  }

  close() {
    if(this.action.length!==0){
      this.dataService.updateNotes("");
    }
    this.dialogRef.close();
  }

  inputChange(event:any){
    this.input=event.target.value;
  }

  addCollaborator(){
    console.log(this.input);
    if(!this.emailPattern.test(this.input)){
      console.log("invalid"); 
    }
    else{
      // for (let index = 0; index < this.note.collaborator.length; index++) {
      //   if (this.note.collaborator[index].email === item.email) {
      //     this.note.collaborator.splice(index, 1);
      //     break;
      //   }
      // }
    }
    
  }

  deleteCollaborator(item: any) {
    for (let index = 0; index < this.note.collaborator.length; index++) {
      if (this.note.collaborator[index].email === item.email) {
        this.note.collaborator.splice(index, 1);
        break;
      }
    }

    let object = {
      type: 'DELETE',
      item: item
    }

    this.action.push(object);
  }

  save() {

    if (this.action.length !== 0) {
      this.action.forEach(element => {
        console.log(element);

        switch (element.type) {
          case 'ADD':
            break;
          case 'DELETE':
            let request = {
              note_id: this.note.id,
              collaborator: element.item._id
            }

            this.noteService.deleteCollaborator(request, null).subscribe((response) => {
              console.log(response);
            }, (error) => {
              console.log(error);
            });
            break;
          default:
            break;
        }
      });
    }
  }

}
