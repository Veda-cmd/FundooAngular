import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import {UserService} from '../../services/user.service';


var passwordPattern = /^[a-zA-Z0-9]{6,20}$/;

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  show:boolean=false;
  password:string;
  confirmPassword:string;

  constructor(private route: ActivatedRoute, private user:UserService, private router:Router) { }

  ngOnInit() {
    
  }

  showPassword(){
    this.show=!this.show
  }

  onSubmit(){
    console.log(this.route.snapshot.params.token);
    let request={
      new_password:this.password
    }

    let headers = new HttpHeaders({
      resetToken:this.route.snapshot.params.token
    })

    this.user.reset("http://localhost:5000/reset",request,headers).subscribe((response:HttpResponse<any>)=>{ 
      alert("Password has been reset successfully.");
      this.router.navigate(['/login']);
    },(error)=>{
      console.log("Error occurred",error)
    })
  }

}
