import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  open:boolean;
  @Input() labels:Array<any>
  
  constructor(private data:DataService,private router:Router) {}

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
}
