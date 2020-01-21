import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  open:boolean=false;

  constructor(private note: NoteService) { 
  }

  ngOnInit() {
  }

  onClick(){
    this.open=!this.open;
  }

}
