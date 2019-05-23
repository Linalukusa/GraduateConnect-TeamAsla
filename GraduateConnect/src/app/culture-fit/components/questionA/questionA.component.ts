import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService} from 'src/app/services/main-content.service';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-questionA',
  templateUrl: './questionA.component.html',
  styleUrls: ['./questionA.component.css']
})
export class QuestionAComponent implements OnInit {
  
  max: number = 0;

  constructor(public authService: AuthService, public router: Router, public mainContentService: MainContentService) { }

  onScoreTotal(){
    this.mainContentService.count();
  }

  onQuestion2(): void{
    if(this.max === 36){
      this.router.navigate(['culture-fit-root/questionB']);
    }
  }

  ngOnInit() {
  }
}



