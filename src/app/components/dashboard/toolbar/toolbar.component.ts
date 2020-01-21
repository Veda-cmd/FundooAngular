import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  open: boolean;
  labels: [];
  image: string = sessionStorage.getItem("image");
  grid:boolean=false;

  constructor(private data: DataService,private router:Router) {}

  ngOnInit() {
    this.data.open.subscribe(value => this.open = value);
  }

  openDrawer() {
    this.data.changeValue(!this.open);
  }
  
  changeView(){
    this.grid=!this.grid;
  }

  signOut(){
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

}
