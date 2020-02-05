import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HttpErrorResponse } from '@angular/common/http';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-labelmenu',
  templateUrl: './labelmenu.component.html',
  styleUrls: ['./labelmenu.component.scss']
})

export class LabelmenuComponent implements OnInit {
  labels:Array<any>;
  @Input() note:any;
  checked:boolean=false;
  @Output() changeLabels: EventEmitter<any> = new EventEmitter();
  array:Array<any>=[];
  value:string='';
  list:boolean=true;

  constructor(private data:DataService,private noteService:NoteService) { }

  ngOnInit() {
    this.data.labelArray.subscribe(value=>{
      this.labels=value;
    });    
  }

  getCheck(item:any){
    return this.note.label.find((choice:any)=>choice._id===item._id)
  }

  changeLabel(event:MatCheckboxChange,item:any){
    this.changeLabels.emit({value:event.checked,label:item})
  }

  addLabel(item:any){
    console.log(item);
    let request={
      label_name:item
    }
    this.noteService.addLabel(request,null).subscribe((response:any)=>{
      console.log(response.body);
      this.changeLabels.emit({value:true,label:response.body});
      this.data.changeLabels("labels");
    },(error:HttpErrorResponse)=>{
      console.log("Error");
    })
    this.value='';
    this.array=[];
    this.list=true;
  }

  searchLabel(event:any){
    // console.log(this.labels);
    // this.value=event.target.value;
    this.list=false;
    let condition = new RegExp(event.target.value);
    this.array = this.labels.filter(element=> {
      return condition.test(element.label_name);
    });

    if(this.array.length===0){
      this.value=event.target.value;
    }
    for(let i=0;i<this.array.length;i++){
      if(this.array[i].label_name==event.target.value){
        this.value='';
      }
      else{
        this.value=event.target.value;
      }
    }
    // console.log(this.array);
  }

}
