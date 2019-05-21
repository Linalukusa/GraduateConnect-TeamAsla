import { Component, OnInit } from '@angular/core';
import {MainContentComponent} from '../main-content/main-content.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-main-contentB',
  templateUrl: './main-contentB.component.html',
  styleUrls: ['./main-contentB.component.css']
})
export class MainContentBComponent implements OnInit {


  
  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }
  onQuestion3()
  {
    this.router.navigate(['culture-fit-root/main-content-c']);
  }

}
