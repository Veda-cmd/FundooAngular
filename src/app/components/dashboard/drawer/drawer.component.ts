import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  open:boolean;
  
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.open.subscribe(value=>this.open=value);
  }

}
