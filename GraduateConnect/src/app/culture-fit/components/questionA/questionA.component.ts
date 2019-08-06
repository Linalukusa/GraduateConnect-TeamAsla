import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService} from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialog } from '@angular/material';
import { QuestionBComponent } from '../questionB/questionB.component';


@Component({
  selector: 'app-questionA',
  templateUrl: './questionA.component.html',
  styleUrls: ['./questionA.component.css']
})
export class QuestionAComponent implements OnInit {

  obj: Answer;

  constructor(public authService: AuthService, public router: Router, public service: MainContentService, public dialog: MatDialog) {
    this.obj = new Answer();
   }

  

   openQuestionB()
   {
     this.dialog.open(QuestionBComponent, {
       height: '750px',
       width: '70%',
     })
   }

  ngOnInit() {
    
  }
  onScoreTotal() {
    this.service.totalDominance.push(this.obj.Dominance);
    this.service.totalConvincing.push(this.obj.Convincing);
    this.service.totalEarth.push(this.obj.Earth);
    this.service.totalPrecise.push(this.obj.Precise);
    this.service.totalAccommodate.push(this.obj.Accommodate);
    this.service.totalIntrovert.push(this.obj.Introvert);
    this.service.totalAnimated.push(this.obj.Animated);
    this.service.totalHeadstrong.push(this.obj.Headstrong);
  }
}



