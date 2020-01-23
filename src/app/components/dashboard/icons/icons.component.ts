import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  dateTimeRange:Date;
  min:Date=new Date();
  array: Array<any> = [
    { code: '#FFFFFF', name: 'White' },
    { code: '#F28B82', name: 'Red' },
    { code: '#F7BC04', name: 'Orange' },
    { code: '#FCF474', name: 'Yellow' },
    { code: '#CCFF90', name: 'Green' },
    { code: '#A7FFEB', name: 'Teal' },
    { code: '#CBF0F8', name: 'Blue'},
    { code: '#AECBFA', name: 'Dark Blue'}
  ]
  @ViewChild(MatMenuTrigger,{static:true}) trigger: MatMenuTrigger;
  @Output() setReminder: EventEmitter<any> = new EventEmitter();
  @Output() color: EventEmitter<any> = new EventEmitter();
  @Output() archive: EventEmitter<any> = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  callReminder(){
    this.setReminder.emit(this.dateTimeRange);
    this.trigger.closeMenu();
  }

  setColor(data:any){
    this.color.emit(data);
  }

  setArchive(){
    this.archive.emit();
  }

}
