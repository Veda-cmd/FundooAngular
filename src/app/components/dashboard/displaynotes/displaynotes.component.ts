import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  @Input() allnotes:Array<any>;
  pinned:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  pinNote(){
    this.pinned=true;
  }

  unpinNote(){
    this.pinned=false;
  }
}
