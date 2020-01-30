import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archived: Array<any>;

  constructor(private note:NoteService,private data:DataService) { }

  ngOnInit() {
    this.getArchivedNotes();
  }

  getArchivedNotes(){
    this.note.getListings('isArchived').subscribe((response:any)=>{ 
      let array = response.filter((element:any)=>{
        return element.isArchived !== false;
      });
     this.archived = array.reverse();
      },(error)=>{
        console.log("Error occurred",error)
    });
  }

}
