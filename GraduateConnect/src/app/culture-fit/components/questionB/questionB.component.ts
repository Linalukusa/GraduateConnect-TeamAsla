import { Component, OnInit } from '@angular/core';
import {QuestionAComponent} from '../../components/questionA/questionA.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService } from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialog, MatDialogRef } from '@angular/material';
import { QuestionCComponent } from '../questionC/questionC.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import 'count()'import { count } from 'rxjs/operators';
//  from '../main-content/main-content.component';


@Component({
  selector: 'app-questionB',
  templateUrl: './questionB.component.html',
  styleUrls: ['./questionB.component.css']
})
export class QuestionBComponent implements OnInit {

  obj: Answer;
  dominance: number;
  precise: number;
  earth: number;
  animated: number;
  convincing: number;
  accommodate: number;
  introvert: number;
  headstrong: number;

  questions = [
    'I like to direct other peoples activities', //Dominance
    'I like to be formal and work to standards', //Precise
    'I like a close-knit team in which to work', //DownToEarth
    'I like to create things', //Animated
    'I like to convince people to carry out activities', //Convincing
    'I like to be clearly told what to do', //Accommodate
    'I like to be left to get on with it', //Introvert
    'I like to do complete tasks quickly myself for the best results' //Headstrong
  ];

  constructor(
    public authService: AuthService,
    public router: Router,
    public service: MainContentService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionBComponent>) { this.obj = new Answer(); }

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
      console.log(this.questions);
    }

    ngOnInit() {
    }
  
  closeDialog(): void
  {
    this.dialogRef.close();
  }
  openQuestionC()
   {
     this.dialog.open(QuestionCComponent, {
      disableClose: true,
      height: '1000px',
      width: '50%',
     })
   }


  onScoreTotal() {
    this.questions.reverse();
    this.dominance = this.questions.indexOf('I like to direct other peoples activities');
    this.service.totalDominance.push(this.dominance + 1)
    this.precise = this.questions.indexOf('I like to be formal and work to standards');
    this.service.totalPrecise.push(this.precise + 1);
    this.earth = this.questions.indexOf('I like a close-knit team in which to work');
    this.service.totalEarth.push(this.earth + 1);
    this.animated = this.questions.indexOf('I like to create things');
    this.service.totalAnimated.push(this.animated + 1)
    this.convincing = this.questions.indexOf('I like to convince people to carry out activities');
    this.service.totalConvincing.push(this.convincing + 1);
    this.accommodate = this.questions.indexOf('I like to be clearly told what to do');
    this.service.totalAccommodate.push(this.accommodate + 1);
    this.introvert = this.questions.indexOf('I like to be left to get on with it');
    this.service.totalIntrovert.push(this.introvert + 1);
    this.headstrong = this.questions.indexOf('I like to do complete tasks quickly myself for the best results');
    this.service.totalHeadstrong.push(this.headstrong + 1);
    // console.log(this.service.totalAccommodate.pop());
    this.closeDialog();
    this.openQuestionC(); 
  }
}
