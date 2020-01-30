import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trash: Array<any>;

  constructor(private note:NoteService) { }

  ngOnInit() {
    this.getTrashNotes();
  }

  getTrashNotes(){
    this.note.getListings('isTrash').subscribe((response:any)=>{ 
      let array = response.filter((element:any)=>{
        return element.isTrash !== false;
      });
     this.trash = array.reverse();
      },(error)=>{
        console.log("Error occurred",error)
    });
  }

}
