import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-notedialog',
  templateUrl: './notedialog.component.html',
  styleUrls: ['./notedialog.component.scss']
})
export class NotedialogComponent implements OnInit {
  removable:boolean=true;
  reminder:string;
  title:string;
  description:string;
  array:Array<any>;
  color:string;
  isPinned:boolean;
  isArchived:boolean;
  isTrash:boolean;
  reminderFront: string;

  constructor(public dialogRef: MatDialogRef<NotedialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private noteService:NoteService,private dataService:DataService) { }

  ngOnInit() {
    // console.log(this.data.note);
    this.title=this.data.note.title;
    this.description=this.data.note.description;
    this.color=this.data.note.color;
    this.reminderFront=this.data.note.reminder;
    this.array=this.data.note.label
    this.isPinned=this.data.note.isPinned;
    this.isArchived=this.data.note.isArchived;
    this.isTrash=this.data.note.isTrash
  }

  setColor(data:any){
    
    let request = {
      note_id:this.data.note.id,
      color:data.code,
      isPinned:this.data.note.isPinned===true?true:false
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{
      // console.log(response);
      this.color=data.code;
    },(error)=>{
        console.log("Error occurred",error)
    })
  }

  pinNote(){
    this.isPinned=true;
    let request={
      note_id:this.data.note.id,
      isPinned:true,
      isArchived:this.data.note.isArchived===true?false:this.data.note.isArchived
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  unpinNote(){
    this.isPinned=false;
    let request={
      note_id:this.data.note.id,
      isPinned:false
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  setReminder(data:Date){
    let newDate = data.toString();
    this.reminder = newDate.slice(4, 10) + ',' + newDate.slice(11, 15) + ' ' + newDate.slice(16, 25);
    // let date =  data.getFullYear();
    let hours = data.getHours();
    var AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    let minutes:any = data.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var finalTime = hours + ":" + minutes + " " + AmOrPm;
    this.reminderFront=newDate.slice(4, 10)+', '+finalTime;

    let request={
      note_id:this.data.note.id,
      reminder:this.reminder
    }

    this.noteService.addReminder(request,null).subscribe((response:any)=>{ 
      this.dataService.updateNotes("update");
      // console.log(response);
      
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  deleteReminder(){
    let request={
      note_id:this.data.note.id,
    }

    this.noteService.deleteReminder(request,null).subscribe((response:any)=>{ 
      this.reminderFront=null;
      this.reminder=null;
      this.dataService.updateNotes("update");
      // console.log(response);

    },(error)=>{
        console.log("Error occurred",error)
    })
  }

  changeLabel(item:any){
    // console.log(item);
    if(item.value===true){
      this.array.push(item.label);
      let request={
        note_id:this.data.note.id,
        label_name:item.label.label_name
      }
      this.noteService.addLabelToNote(request,null).subscribe((response:any)=>{
        console.log(response);  
      },(error)=>{
        console.log("Error occurred",error);
      });
    }
    else{
      for(let i=0;i<this.array.length;i++){
        if(this.array[i]._id===item.label._id){
          this.array.splice(i,1);
        }
      }

      let request={
        note_id:this.data.note.id,
        label_id:item.label._id
      }

      this.noteService.deleteLabelFromNote(request,null).subscribe((response:any)=>{
        console.log(response);  
      },(error)=>{
        console.log("Error occurred",error);
      }) 
    }
  }

  deleteNote(){
    let request={
      note_id:this.data.note.id,
    }

    this.noteService.deleteNote(request,null).subscribe((response:any)=>{
      this.dialogRef.close(); 
      this.dataService.updateNotes("update");
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  deleteLabel(item:any){
    for(let i=0;i<this.array.length;i++){
      if(this.array[i]._id===item._id){
        this.array.splice(i,1);
      }
    }

    let request={
      note_id:this.data.note.id,
      label_id:item._id
    }

    this.noteService.deleteLabelFromNote(request,null).subscribe((response:any)=>{
      console.log(response);  
    },(error)=>{
      console.log("Error occurred",error);
    }) 
  }

  setArchive(){
    let request = {
      note_id:this.data.note.id,
      isArchived:true,
      isPinned:false
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.dialogRef.close(); 
      this.dataService.updateNotes("update");
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  setUnarchive(){
    let request = {
      note_id:this.data.note.id,
      isArchived:false
    }

    this.noteService.updateNote(request,null).subscribe((response:any)=>{ 
      this.dialogRef.close("unarchive"); 
      // console.log(response);
    },(error)=>{
        console.log("Error occurred",error)
    });
  }

  close(){
    this.dialogRef.close({note_id:this.data.note.id,
      title:this.title,
      description:this.description,
      isPinned:this.isPinned,
      color:this.color
    });
  }
}
