import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { HttpResponse } from '@angular/common/http';

var emailPattern =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  email:string = "";

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(!emailPattern.test(this.email)){
      alert("Email/password is incorrect");
      this.email="";
      return;
    }
    else{
      let request ={
        email:this.email
      }

      this.user.forgot("http://localhost:5000/forgot",request).subscribe((response:HttpResponse<any>)=>{ 
        // sessionStorage.setItem("token",response.body.session);
        // this.router.navigate(['/dashboard']);
      },(error)=>{
        console.log("Error occurred",error)
      })
    }
  }

}
