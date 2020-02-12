import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { NotedialogComponent } from '../notedialog/notedialog.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
  
})
export class DisplaynotesComponent implements OnInit {
  @Input() note:any;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();
  @Output() pinNotes: EventEmitter<any> = new EventEmitter();
  removable:boolean=true;
  open:boolean=false;

  constructor(private noteService:NoteService,private data:DataService,public dialog: MatDialog) { }

  ngOnInit() {
    this.data.list.subscribe(value => this.open = value);
  }

  pinNote(){
    let request={
      note_id:this.note.id,
      isPinned:true,
      isArchived:this.note.isArchived===true?false:this.note.isArchived
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      this.pinNotes.emit();
      // console.log(response);
      
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  unpinNote(){
    let request={
      note_id:this.note.id,
      isPinned:false,
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit();
      this.pinNotes.emit();
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
      if(this.note.isPinned===true){
        this.pinNotes.emit();
      }
      else{
        this.getNotes.emit(null);
      }
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
      if(this.note.isPinned===true){
        this.pinNotes.emit();
      }
      else{
        this.getNotes.emit(null);
      }
      // console.log(response);

    },(error)=>{
        console.log("Error occurred",error)
    })
  }

  deleteLabel(item:any){
    let request={
      note_id:this.note.id,
      label_id:item._id
    }
    
    this.noteService.deleteLabelFromNote(request,null).subscribe((response:any)=>{
      if(this.note.isPinned!==false){
        this.pinNotes.emit();
      }
      else{
        this.getNotes.emit(null);
      }
    },(error)=>{
      console.log("Error occurred",error);
    }) 
  }

  setColor(data:any){
    let request = {
      note_id:this.note.id,
      color:data.code,
      isPinned:this.note.isPinned===true?true:false
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{
      
      if(this.note.isPinned===true){
        this.pinNotes.emit();
      }
      else{
        this.getNotes.emit(null);
      }
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
      this.pinNotes.emit();
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  setUnarchive(){
    let request = {
      note_id:this.note.id,
      isArchived:false,
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit();
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  deleteNote(){
    let request={
      note_id:this.note.id,
    }

    this.noteService.deleteNote(request,null).subscribe((response:any)=>{ 
      if(this.note.isPinned!==false){
        this.pinNotes.emit();
      }
      else{
        this.getNotes.emit(null);
      }
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  changeLabel(item:any){
    // console.log(item);
    
    if(item.value===true){
      let request={
        note_id:this.note.id,
        label_name:item.label.label_name
      }
      this.noteService.addLabelToNote(request,null).subscribe((response:any)=>{
        if(this.note.isPinned!==false){
          this.pinNotes.emit();
        }
        else{
          this.getNotes.emit(null);
        }
      },(error)=>{
        console.log("Error occurred",error);
      });
    }
    else{
      let request={
        note_id:this.note.id,
        label_id:item.label._id
      }
      
      this.noteService.deleteLabelFromNote(request,null).subscribe((response:any)=>{
        if(this.note.isPinned!==false){
          this.pinNotes.emit();
        }
        else{
          this.getNotes.emit(null);
        }
      },(error)=>{
        console.log("Error occurred",error);
      }) 
    }
  }

  restoreNote(){
    // console.log("restore",this.note);

    let request={
      note_id:this.note.id,
      isTrash:false
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  deleteNotePermanent(){
    // console.log("delete",this.note);

    let request={
      note_id:this.note.id,
    }

    this.noteService.deleteNotePermanent(request,null).subscribe((response:any)=>{ 
      this.getNotes.emit(null);
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  openNoteDialog(){
    const dialogRef = this.dialog.open(NotedialogComponent,{
      data:{note:this.note}
    })

    dialogRef.afterClosed().subscribe((result:any)=>{
      // console.log(result);
      if (result!==undefined && result!=="unarchive")
      { 
      //  console.log(result);

        let request = {
          note_id:result.note_id,
          title:result.title,
          description:result.description,
          color:result.color,
          isPinned:result.isPinned===true?true:false
        }
        this.noteService.updateNote(request,null).subscribe((response:any)=>{
          // console.log(response);
          if(result.isPinned===true){
            this.pinNotes.emit();
          }
          else{
            this.getNotes.emit();
          }
        },(error)=>{
          console.log("Error occured",error);
        })
      }
      else if(result === "unarchive"){
      //  console.log(result);

        this.getNotes.emit();
      }
    })
  }

  openCollboratorDialog(){
    this.dialog.open(CollaboratorComponent,{data:{note:this.note}})
  }
}
