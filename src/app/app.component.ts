import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email:String = '';
  password:String = '';

  onSubmit(){
    console.log(this.email,this.password);
  }

  onUpdate(event:Event){
    this.email=(<HTMLInputElement>event.target).value;
  }
}
