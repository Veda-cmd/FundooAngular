import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpService) { }

  getLabels(url: string){
    return this.http.get(url);
  }

  getNotes(url: string){
    return this.http.get(url);
  }

  addReminder(url:string,request:Object,headers:HttpHeaders){
    return this.http.post(url,request,headers);
  }

  deleteReminder(url:string,request:Object,headers:HttpHeaders){
    return this.http.post(url,request,headers);
  }
}
