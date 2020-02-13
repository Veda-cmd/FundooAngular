import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpService: HttpService) { }

  login(request: Object){
    return this.httpService.post(environment.url+'login',request,null);
  }

  register(request: Object){
    return this.httpService.post(environment.url+'register',request,null);
  }

  forgot(request: Object){
    return this.httpService.post(environment.url+'forgot',request,null);
  }

  reset(request: Object,headers:HttpHeaders){
    return this.httpService.post(environment.url+'reset',request,headers);
  }

  getUsers(){
    return this.httpService.get(environment.url+'getAllUsers');
  }
}
