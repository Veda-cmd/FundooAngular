import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  show:boolean=false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  showPassword(){
    this.show=!this.show
  }

  onSubmit(){
    console.log(this.route.snapshot.params);
  }

}
