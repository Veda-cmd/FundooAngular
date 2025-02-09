import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { CollaboratorComponent } from '../collaborator/collaborator.component';

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
  @Input() archivedNote:any;
  @ViewChild(MatMenuTrigger,{static:false}) trigger: MatMenuTrigger;
  @Output() setReminder: EventEmitter<any> = new EventEmitter();
  @Output() color: EventEmitter<any> = new EventEmitter();
  @Output() archive: EventEmitter<any> = new EventEmitter();
  @Output() unarchive: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() collaborator: EventEmitter<any> = new EventEmitter();
  @Output() labelchange: EventEmitter<any> = new EventEmitter();
  @Output() restore: EventEmitter<any> = new EventEmitter();
  @Output() deletePermanent: EventEmitter<any> = new EventEmitter();

  constructor(private dialog:MatDialog) {
  }

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

  setUnArchive(){
    this.unarchive.emit();
  }

  deleteNote(){
    this.delete.emit();
  }

  openLabel(item:any){
    this.labelchange.emit(item);
  }

  restoreNote(){
    this.restore.emit();
  }

  deleteNotePermanent(){
    this.deletePermanent.emit();
  }

  openCollaborator(){
    this.collaborator.emit();
  }

}
