import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { exists } from 'fs';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
  image: any = sessionStorage.getItem('image');
  firstName: string = sessionStorage.getItem('firstName');
  lastName: string = sessionStorage.getItem('lastName');
  email: string = sessionStorage.getItem('email');;
  users: Array<any>;
  note: any;
  action: Array<any> = [];
  input: string = '';
  exists: boolean = false;
  invalid: boolean = false;
  notExists: boolean = false;

  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService, private dataService: DataService, private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.note = this.data.note;
  }

  getUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.reverse();
    }, (error) => {
      console.log("Error occurred", error)
    })
  }

  inputChange(event: any) {
    this.input = event.target.value;
    this.exists = false;
    this.invalid = false;
    this.notExists=false;
  }

  addCollaborator() {
    if (!this.emailPattern.test(this.input)) {
      this.invalid = true;
    }
    else {
      let found = false;
      for (let i = 0; i < this.note.collaborator.length; i++) {
        if (this.note.collaborator[i].email === this.input) {
          this.exists = true;
          return;
        }
      }

      for (let index = 0; index < this.users.length; index++) {
        if (this.users[index].email === this.input) {
          found = true;
          this.note.collaborator.push(this.users[index]);
          let object = {
            type: 'ADD',
            item: this.users[index]
          }
          this.action.push(object);
          this.input = '';
          return;
        }
      }

      if (found == false) {
        this.notExists=true;
      }
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

  close() {
    if (this.action.length !== 0) {
      this.dataService.updateNotes("");
    }
    this.dialogRef.close();
  }

  save() {
    if (this.action.length !== 0) {
      this.dialogRef.close();
      this.action.forEach(element => {
        console.log(element.type);

        switch (element.type) {
          case 'ADD':
            let addRequest = {
              note_id: this.note.id,
              collaborator: [element.item._id]
            }

            this.noteService.addCollaborator(addRequest, null).subscribe((response) => {
              console.log(response);
            }, (error) => {
              console.log(error);
            });
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
    else{
      this.dialogRef.close();
    }
  }

}
