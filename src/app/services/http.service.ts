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

  get(url: string){
    let response = this.http.get(url,{observe:'body'});
    return response;
  }

  put(url: string,request: Object,headers:HttpHeaders){
    let response = this.http.put(url,request,{headers:headers,observe:'body'});
    return response;
  }
}
