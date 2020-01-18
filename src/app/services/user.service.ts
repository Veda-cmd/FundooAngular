import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpService: HttpService) { }

  login(url: string,request: Object){
    return this.httpService.post(url,request,null);
  }

  register(url: string,request: Object){
    return this.httpService.post(url,request,null);
  }

  forgot(url: string,request: Object){
    return this.httpService.post(url,request,null);
  }

  reset(url: string,request: Object,headers:HttpHeaders){
    return this.httpService.post(url,request,headers);
  }
}
