import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { User } from 'src/app/shared/services/user';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  user: User;
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.userStatus();
    this.authService.collection();
   }
}