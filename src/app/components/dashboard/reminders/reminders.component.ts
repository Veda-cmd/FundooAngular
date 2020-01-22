import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  public min = new Date();
  public dateTimeRange: any;
  constructor() { }

  ngOnInit() {
  }
  
}
