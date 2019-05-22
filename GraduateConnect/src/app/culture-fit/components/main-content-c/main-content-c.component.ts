import { Component, OnInit } from '@angular/core';
import {MainContentComponent} from '../main-content/main-content.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-main-content-c',
  templateUrl: './main-content-c.component.html',
  styleUrls: ['./main-content-c.component.css']
})
export class MainContentCComponent implements OnInit {

  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

}
