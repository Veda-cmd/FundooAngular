import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  open:boolean;
  labels:[];

  constructor(private data:DataService) {}

  ngOnInit() {
    this.data.open.subscribe(value=>this.open=value);
  }

  openDrawer(){
    this.data.changeValue(!this.open);
  }

}
