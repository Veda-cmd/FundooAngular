import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LabelDialogComponent } from '../label-dialog/label-dialog.component';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  open:boolean;
  @Input() labels:Array<any>;
  
  constructor(private data:DataService,public dialog: MatDialog) {}

  ngOnInit() {
    this.data.open.subscribe(value=>this.open=value);    
  }

  openNotes(){
    this.data.changeTitle("Fundoo");
    // this.router.navigate(["/dashboard/notes"]);
  }

  openReminders(){
    this.data.changeTitle("Reminders");
    // this.router.navigate(["/dashboard/reminders"]);
  }

  openLabel(label:string){
    this.data.changeTitle(label);
    // this.router.navigate(["/dashboard/label/"+label]);
  }

  openArchive(){
    this.data.changeTitle("Archive");
    // this.router.navigate(["/dashboard/archive"]);
  }

  openTrash(){
    this.data.changeTitle("Trash");
    // this.router.navigate(["/dashboard/trash"]);
  }

  editLabel(){
    this.dialog.open(LabelDialogComponent,{
      minHeight: '300px',
      width: '320px',
    })
  }
}
