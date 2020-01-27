import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  labels:Array<any>=[];
  constructor(private note:NoteService,private data:DataService) { }

  ngOnInit() {
    this.data.labels.subscribe(value=>{ 
      this.getLabels();
    })
  }

  getLabels(){
    this.note.getLabels().subscribe((response:any)=>{ 
     this.labels = response;
     this.data.getLabels(response);
    },(error)=>{
      console.log("Error occurred",error)
    })
  }

}
