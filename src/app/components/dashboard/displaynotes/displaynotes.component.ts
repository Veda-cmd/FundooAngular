import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() note:any;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  pinned:boolean=false;
  removable:boolean=true;

  constructor(private noteService:NoteService) { }

  ngOnInit() {
  }

  pinNote(){
    this.pinned=true;
  }

  unpinNote(){
    this.pinned=false;
  }

  setReminder(data:Date){
    let newDate= data.toString();
    let reminder = newDate.slice(4,10)+','+newDate.slice(11,15)+' '+newDate.slice(16,25);
    
    let request={
      note_id:this.note.id,
      reminder:reminder
    }

    this.noteService.addReminder("http://localhost:5000/note/addReminder",request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      // console.log(response);
      
    },(error)=>{
        console.log("Error occurred",error)
    })
  }

  deleteReminder(){
    let request={
      note_id:this.note.id,
    }

    this.noteService.deleteReminder("http://localhost:5000/note/deleteReminder",request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      console.log(response);

    },(error)=>{
        console.log("Error occurred",error)
    })
  }
}
