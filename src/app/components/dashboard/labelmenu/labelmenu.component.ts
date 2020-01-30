import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Event } from '@angular/router';

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


  constructor(private data:DataService) { }

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

  onClick(event:any){
    event.stopPropagation();
  }

  searchLabel(event:any){
    this.labels = this.labels.filter(element=>element.label_name == event.target.value);
  }

}
