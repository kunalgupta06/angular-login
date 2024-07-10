import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  username: string='';
  password: string='';

  fixedusername: string='kunal';
  fixedpassword: string='123';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onsummit(){
    if(this.fixedusername==this.username && this.fixedpassword==this.password){
      this.router.navigate(['/comp2']);
    } 
    else{
      alert('Incorrect username or Password');
    }
    // alert("hello");
    // console.log("username",this.username);
    // alert("Username: " + this.username); 
    // console.log("password",this.password);
    // alert("password: " + this.password); 
  }
  

 // ng generate component "componentname" 
   

}
