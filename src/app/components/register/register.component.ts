import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName:string;
  email:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    
  }

}
