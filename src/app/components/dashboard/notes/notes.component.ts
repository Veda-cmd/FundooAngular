import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes:Array<any>;
  pinned:Array<any>;
  pinnedLength:number;
  notesLength:number;

  constructor(private note:NoteService,private data:DataService) { }

  ngOnInit() {
    this.data.notes.subscribe(value=>{
      this.getNotes();
      this.getPinnedNotes();
    })
  }

  getNotes(){
    this.note.getNotes().subscribe((response:any)=>{ 
    this.notes = response.reverse();
    this.notesLength=response.length;
    },(error)=>{
      console.log("Error occurred",error)
    });
  }

  getPinnedNotes(){
    this.note.getListings('isPinned').subscribe((response:any)=>{ 
      this.pinned = response.reverse();
      this.pinnedLength=response.length;
      // console.log(this.pinnedLength);
      
      },(error)=>{
        console.log("Error occurred",error)
    });
  }

}
