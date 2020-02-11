import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  image:any=sessionStorage.getItem('image');
  email:string="vedant.nare04@gmail.com";
  note:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    console.log(this.data);
    this.note=this.data.note
  }

}
