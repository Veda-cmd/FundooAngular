import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  notes:Array<any>;
  pinned:Array<any>;
  pinnedLength:number;
  notesLength:number;

  constructor(private note:NoteService,private data:DataService) { }

  ngOnInit() {
    this.getNotes();
    this.getPinnedNotes();
  }
  
  getNotes(){
    this.note.getNotes().subscribe((response:any)=>{ 
      let array = response.filter((element:any)=>{
        return element.reminder !== null;
      });
     this.notes = array;
     this.notesLength=array.length;
    },(error)=>{
      console.log("Error occurred",error)
    });
  }

  getPinnedNotes(){
    this.note.getListings('isPinned').subscribe((response:any)=>{ 
      let array = response.filter((element:any)=>{
        return element.reminder !== null;
      });
     this.pinned = array;
     this.pinnedLength=array.length;
      
      },(error)=>{
        console.log("Error occurred",error)
    });
  }
}
