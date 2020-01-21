import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';

var emailPattern =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm,
  passwordPattern = /^[a-zA-Z0-9]{6,20}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  show:boolean=false;
  email:string = "";
  password:string = '';
  constructor(private router:Router, private user: UserService) { }

  ngOnInit() {
  }

  showPassword(){
    this.show=!this.show
  }

  onSubmit(){

    if(!emailPattern.test(this.email) || !passwordPattern.test(this.password)){
      alert("Email/password is incorrect");
      this.email="";
      this.password="";
      return;
    }
    else{
      let request={
        email:this.email,
        password:this.password
      }
    
      this.user.login('http://localhost:5000/login',request).subscribe((response:HttpResponse<any>)=>{ 
        sessionStorage.setItem("token",response.body.session);
        sessionStorage.setItem("image",response.body.response.imageUrl);
        
        // sessionStorage.setItem("image",response.body)
        this.router.navigate(['/dashboard']);
      },(error)=>{
        console.log("Error occurred",error)
      })
    }
  }

  // onUpdate(event:Event){
  //   this.email=(<HTMLInputElement>event.target).value;
  // }
}
