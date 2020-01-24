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

  
}
