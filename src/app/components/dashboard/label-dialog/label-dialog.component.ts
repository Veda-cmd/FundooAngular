import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NoteService } from 'src/app/services/note.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss']
})
export class LabelDialogComponent implements OnInit {

  labels:Array<any>;
  getLabels:any;
  add:boolean=false;
  name:string;
  createname:string;
  id:string;

  constructor( public dialogRef: MatDialogRef<LabelDialogComponent>,
  private note:NoteService,private dataService:DataService) { }

  ngOnInit() {
    this.dataService.labelArray.subscribe(value=>{
      this.labels=value;
    })
  }

  changeIcon(){
    this.add=!this.add;
    this.createname=null;
  }
  
  changeInput(){
    this.add=true;
  }

  rename(item:any){
    this.name=item.label_name;
    this.id=item._id
  }

  addLabel(){
    let request={
      label_name:this.createname
    }

    this.note.addLabel(request,null).subscribe((response:any)=>{
      this.add=false;
      this.createname=null;
      this.dataService.changeLabels("labels");
    },(error:HttpErrorResponse)=>{
      console.log("Error");
    })
    
  }

  renameLabel(item:any){
    if(this.name===item.label_name){
      this.id=null;
      this.name=null;
    }
    else{

      let request={
        label_id:this.id,
        label_name:this.name
      }

      this.note.updateLabel(request,null).subscribe((response:any)=>{
        this.id=null;
        this.name=null;
        this.dataService.changeLabels("labels");
        this.dataService.updateNotes("notes");
      },(error:HttpErrorResponse)=>{
        console.log("Error");
      })
    }
    
  }

  deleteLabel(item:any){
    let request={
      id:item._id,
    }

    this.note.deleteLabel(request,null).subscribe((response:any)=>{
      this.dataService.changeLabels("labels");
      // console.log(response);
    },(error:HttpErrorResponse)=>{
      console.log("Error occurred");
    })
  }

  done(){
    this.dialogRef.close();
  }
}


