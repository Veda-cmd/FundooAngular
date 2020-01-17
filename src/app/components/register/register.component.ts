import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';


var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm,
  passwordPattern = /^[a-zA-Z0-9]{6,20}$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  show:boolean=false;

  constructor(private user: UserService, private router:Router) { }

  ngOnInit() {
  }

  showPassword(){
    this.show=!this.show
  }

  onSubmit() {
    if (!emailPattern.test(this.email) || !passwordPattern.test(this.password)) {
      alert("Email/password is incorrect.");
      this.password = "";
      return;
    }
    else{
      let request={
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
      }
      this.user.register("http://localhost:5000/register",request).subscribe((response:HttpResponse<any>)=>{ 
        this.router.navigate(['/login']);
      },(error:HttpErrorResponse)=>{
        console.log("Error occurred",error)
        if(error.name==="HttpErrorResponse"){
          alert("Email already registered")
          this.email="";
          this.password="";
          this.firstName="";
          this.lastName="";
        }
      })
    }
  }

}
