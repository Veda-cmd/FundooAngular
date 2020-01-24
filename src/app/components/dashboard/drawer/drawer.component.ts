import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LabelDialogComponent } from '../label-dialog/label-dialog.component';

export interface DialogData {
 labels:Array<any>
}

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  open:boolean;
  @Input() labels:Array<any>
  
  constructor(private data:DataService,private router:Router,public dialog: MatDialog) {}

  ngOnInit() {
    this.data.open.subscribe(value=>this.open=value);    
  }

  openNotes(){
    this.router.navigate(["/dashboard/notes"]);
  }

  openReminders(){
    this.router.navigate(["/dashboard/reminders"]);
  }

  openLabel(label:string){
    this.router.navigate(["/dashboard/label/"+label]);
  }

  openArchive(){
    this.router.navigate(["/dashboard/archive"]);
  }

  openTrash(){
    this.router.navigate(["/dashboard/trash"]);
  }

  editLabel(){
    this.dialog.open(LabelDialogComponent,{
      minHeight: '300px',
      width: '400px',
      data:{labels:this.labels}
    })
  }
}
