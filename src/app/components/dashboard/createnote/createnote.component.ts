import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  open: boolean = false;
  removable:boolean=true;
  title: string=null;
  description: string;
  reminder: string;
  reminderFront: string=null;
  color: string=null;
  pinned:boolean=false;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  constructor(private note: NoteService) {
  }

  ngOnInit() {
  }

  onClick() {
    this.open = !this.open;
  }

  resetValues(){
    this.title=null;
    this.description=null;
    this.color=null;
    this.reminderFront=null;
    this.reminder=null;
    this.pinned=false;
  }

  setReminder(data: Date) {
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
  }

  setColor(data:any){
    this.color=data.code
  }

  deleteReminder(){
    this.reminder=null;
    this.reminderFront=null;
  }

  setArchive(){

    if(this.title===null){
      this.onClick();
    }
    else if(this.title.length!=0){
      let request={
        title:this.title,
        description:this.description,
        color:this.color,
        reminder:this.reminder,
        isArchived:true,
      }
      console.log(request);
      this.note.addNote(request,null).subscribe((response:any)=>{
        console.log(response);
        this.resetValues();
        this.onClick();
        this.getNotes.emit();

      },(error)=>{
        console.log("error occurred",error);
        this.resetValues();
        this.onClick();
      })
    }
  }

  pinNote(){
    this.pinned=!this.pinned;
  }

  onClose(){
    if(this.title===null){
      this.onClick();
    }
    else if(this.title.length!=0){
      let request={
        title:this.title,
        description:this.description,
        color:this.color,
        reminder:this.reminder,
        isPinned:this.pinned
      }
      this.note.addNote(request,null).subscribe((response:any)=>{
        // console.log(response);
        this.resetValues();
        this.onClick();
        this.getNotes.emit();
      },(error)=>{
        console.log("error occurred",error);
        this.resetValues();
        this.onClick();
      })
    }
  }

}
