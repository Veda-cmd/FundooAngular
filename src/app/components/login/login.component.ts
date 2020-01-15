import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email:any = ['',Validators.required,Validators.email];
  password:String = '';

  constructor(private http:HttpClient, private router:Router, private user: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    let request={
      email:this.email,
      password:this.password
    }
    // let obs = this.http.post();
    this.user.login('http://localhost:5000/login',request).subscribe((response:HttpResponse<any>)=>{ 
      this.router.navigate(['/register']);
      sessionStorage.setItem("token",response.body.session)
    })
  }

  onUpdate(event:Event){
    this.email=(<HTMLInputElement>event.target).value;
  }
}
