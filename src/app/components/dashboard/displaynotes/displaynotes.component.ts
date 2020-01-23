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
    let request={
      note_id:this.note.id,
      isPinned:true,
      isArchived:this.note.isArchived===true?false:this.note.isArchived
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      // console.log(response);
      
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  unpinNote(){
    this.pinned=false;
    let request={
      note_id:this.note.id,
      isPinned:false,
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      // console.log(response);
      
    },(error)=>{
        console.log("Error occurred",error)
    })
  }

  setReminder(data:Date){
    let newDate= data.toString();
    let reminder = newDate.slice(4,10)+','+newDate.slice(11,15)+' '+newDate.slice(16,25);
    
    let request={
      note_id:this.note.id,
      reminder:reminder
    }

    this.noteService.addReminder(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      // console.log(response);
      
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  deleteReminder(){
    let request={
      note_id:this.note.id,
    }

    this.noteService.deleteReminder(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      console.log(response);

    },(error)=>{
        console.log("Error occurred",error)
    })
  }

  setColor(data:any){
    let request = {
      note_id:this.note.id,
      color:data.code,
      isPinned:this.note.isPinned===true?true:false
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    })
  }

  setArchive(){
    let request = {
      note_id:this.note.id,
      isArchived:true,
      isPinned:false
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    })
  }
}
