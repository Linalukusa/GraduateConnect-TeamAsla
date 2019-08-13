import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService} from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionBComponent } from '../questionB/questionB.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-questionA',
  templateUrl: './questionA.component.html',
  styleUrls: ['./questionA.component.css']
})
export class QuestionAComponent implements OnInit {

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
    'I Prefer To Be Assertive', //Dominance
    'I Prefer To Follow Regulations In My Workspace', //Precise
    'I Prefer To Join In With Others', //DownToEarth
    'I Prefer To Move At A Fast Pace', //Animated
    'I Prefer To Influence People', //Convincing
    'I Prefer To Accommodate Others Wishes', //Accommodate
    'I Prefer To Work Quietly On My Own', //Introvert
    'I Prefer To Work Independently' //Headstrong
  ];

  constructor(public authService: AuthService, public router: Router, public service: MainContentService, public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionAComponent>) {
    this.obj = new Answer()}

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
   openQuestionB()
   {
     this.dialog.open(QuestionBComponent, {
      disableClose: true,
      height: '1000px',
      width: '50%',
     })
   }
  onScoreTotal() {
    this.questions.reverse();
    this.dominance = this.questions.indexOf('I Prefer To Be Assertive');
    this.service.totalDominance.push(this.dominance + 1)
    this.precise = this.questions.indexOf('I Prefer To Follow Regulations In My Workspace');
    this.service.totalPrecise.push(this.precise + 1);
    this.earth = this.questions.indexOf('I Prefer To Join In With Others');
    this.service.totalEarth.push(this.earth + 1);
    this.animated = this.questions.indexOf('I Prefer To Move At A Fast Pace');
    this.service.totalAnimated.push(this.animated + 1)
    this.convincing = this.questions.indexOf('I Prefer To Influence People');
    this.service.totalConvincing.push(this.convincing + 1);
    this.accommodate = this.questions.indexOf('I Prefer To Accommodate Others Wishes');
    this.service.totalAccommodate.push(this.accommodate + 1);
    this.introvert = this.questions.indexOf('I Prefer To Work Quietly On My Own');
    this.service.totalIntrovert.push(this.introvert + 1);
    this.headstrong = this.questions.indexOf('I Prefer To Work Independently');
    this.service.totalHeadstrong.push(this.headstrong + 1);
    // console.log(this.service.totalAccommodate.pop());
    this.closeDialog();
    this.openQuestionB();
  }
}



