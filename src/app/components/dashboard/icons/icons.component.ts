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
  @ViewChild(MatMenuTrigger,{static:true}) trigger: MatMenuTrigger;
  @Output() setReminder: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callReminder(){
    this.setReminder.emit(this.dateTimeRange);
    this.trigger.closeMenu();
  }

}
