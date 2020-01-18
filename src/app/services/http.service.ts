import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class HttpService {

  constructor(private http:HttpClient) { }

  post(url: string,request: Object,headers:HttpHeaders){
    let response = this.http.post(url,request,{headers:headers,observe: 'response' });
    return response;
  }
}
