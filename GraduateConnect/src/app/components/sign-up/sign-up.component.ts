import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  address: any =""
  password: any = "";
  cPassword: any = "c";
    onSignUp(){
    if (this.password === this.cPassword) {
  
   this.authService.SignUp(this.address, this.password); }   //Call SignUp() method from AuthService pls

   else {
     console.log("Passwords don't match.")
   }}
  constructor(
  public authService: AuthService
  ) { }
  ngOnInit() { }  

}
