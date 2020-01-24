import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  notes: Array<any>;
  pinnedLength: number;
  notesLength:number;
  pinned: Array<any>=[];
  param:string

  constructor(private router: ActivatedRoute, private note: NoteService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.param=params.get("name");
      this.getNotes();
      this.getPinnedNotes();
    });
  }

  getNotes() {
    this.note.getNotes().subscribe((response: any) => {
      let array = response.filter((element:any)=>{
        return element.label.length !==0;
      });

      let res:Array<any>=[];

      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].label.length; j++) {
          if(array[i].label[j].label_name===this.param)
          {
            res.push(array[i]);
            break;
          }
        }
      }
      this.notes = res;
      this.notesLength=res.length;
      // console.log(this.notes);  
    }, (error) => {
      console.log("Error occurred", error)
    });
  }

  getPinnedNotes(){
    this.note.getListings('isPinned').subscribe((response:any)=>{ 
      
      let array = response.filter((element:any)=>{
        return element.label.length !==0;
      });

      let res:Array<any>=[];

      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].label.length; j++) {
          if(array[i].label[j].label_name===this.param)
          {
            res.push(array[i]);
            break;
          }
        }
      }

      this.pinned = res;
      this.pinnedLength=res.length;
      // console.log(this.pinned);
      
      },(error)=>{
        console.log("Error occurred",error)
    });
  }

}
