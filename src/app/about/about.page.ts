import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage{

  constructor(private route: Router) { }

  home() {
    this.route.navigate(['/home']);
  }
  evaluation() {
    this.route.navigate(['/evaluation']);
  }
  
  
   //to declare and call email-password that is inputed//
   public form = {
    email:"",
    name:"",
    initial:"",
    date:"",
    ginitials:"",
    contact:"",
    date2:""
  }
  

  //function to print what is inputed in the form that is declared above

  print() {
    console.log(this.form)
  }

}