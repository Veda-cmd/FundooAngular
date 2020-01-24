import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes:Array<any>;
  pinned:Array<any>;
  pinnedLength:number;

  constructor(private note:NoteService) { }

  ngOnInit() {
    this.getNotes();
    this.getPinnedNotes();
  }

  getNotes(){
    this.note.getNotes().subscribe((response:any)=>{ 
    this.notes = response.reverse();
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
