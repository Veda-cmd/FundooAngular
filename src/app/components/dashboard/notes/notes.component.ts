import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes:Array<any>

  constructor(private note:NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(){
    this.note.getNotes("http://localhost:5000/note/getAllNotes").subscribe((response:any)=>{ 
    this.notes = response;
    // console.log(response);
    
    },(error)=>{
      console.log("Error occurred",error)
    })
  }

}
