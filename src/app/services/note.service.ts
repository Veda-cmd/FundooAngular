import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

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
}
