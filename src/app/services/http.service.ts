import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class HttpService {

  constructor(private http:HttpClient) { }

  post(url: string,request: Object){
    let response = this.http.post(url,request,{ observe: 'response' });
    return response;
  }
}
