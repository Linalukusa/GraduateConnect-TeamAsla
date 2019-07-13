import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';

import { Router } from '@angular/router';

@Component({
    template: ''
  })
  
  export class LogoutComponent implements OnInit {
  
    constructor(private _authService: AuthService, private router: Router) {}
  
    ngOnInit() {
      this._authService.SignOut();
      this.router.navigate(['sign-in']);
    }
  
  }