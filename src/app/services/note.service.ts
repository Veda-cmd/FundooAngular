import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpService) { }

  getLabels(){
    return this.http.get(environment.url+'label/getAllLabels');
  }

  getNotes(){
    return this.http.get(environment.url+'note/getAllNotes');
  }

  getListings(request:string){
    return this.http.get(environment.url+'note/getListings?'+request);
  }

  addNote(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'note/addNote',request,headers);
  }

  addReminder(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'note/addReminder',request,headers);
  }

  deleteReminder(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'note/deleteReminder',request,headers);
  }

  updateNote(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'note/updateNote',request,headers);
  }

  deleteNote(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'note/deleteNote',request,headers);
  }

  addLabelToNote(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'note/addLabel',request,headers);
  }

  deleteLabelFromNote(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'note/deleteLabel',request,headers);
  }

  addLabel(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'label/add',request,headers);
  }

  deleteLabel(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'label/delete',request,headers);
  }

  updateLabel(request:Object,headers:HttpHeaders){
    return this.http.post(environment.url+'label/update',request,headers);
  }

  
}
