import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trashicons',
  templateUrl: './trashicons.component.html',
  styleUrls: ['./trashicons.component.scss']
})
export class TrashiconsComponent implements OnInit {

  @Output() restore: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteNote(){
    this.delete.emit();
  }

  restoreNote(){
    this.restore.emit()
  }
}
