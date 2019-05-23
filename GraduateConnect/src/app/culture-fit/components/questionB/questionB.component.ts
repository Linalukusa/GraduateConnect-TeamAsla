import { Component, OnInit } from '@angular/core';
import {QuestionAComponent} from '../questionA/questionA.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService } from 'src/app/services/main-content.service';
// import 'count()'import { count } from 'rxjs/operators';
//  from '../main-content/main-content.component';


@Component({
  selector: 'app-questionB',
  templateUrl: './questionB.component.html',
  styleUrls: ['./questionB.component.css']
})
export class QuestionBComponent implements OnInit {

  max: number = 0;
  constructor(public authService: AuthService,
    public router: Router, public mainContentService: MainContentService) { }

  onTotalScore(){
    this.mainContentService.count();
  }

  ngOnInit() {
  }
  
  onQuestion3()
  {
    //if(this.max === ){
      this.router.navigate(['culture-fit-root/questionC']);
    //}
  }

}
