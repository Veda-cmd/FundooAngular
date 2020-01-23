import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  labels:Array<any>=[];
  constructor(private note:NoteService) { }

  ngOnInit() {
    this.getLabels();
  }

  getLabels(){
    this.note.getLabels().subscribe((response:any)=>{ 
     this.labels = response;
    },(error)=>{
      console.log("Error occurred",error)
    })
  }

}
