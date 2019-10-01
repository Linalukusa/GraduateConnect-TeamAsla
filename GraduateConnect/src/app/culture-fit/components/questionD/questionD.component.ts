import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService} from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionBComponent } from '../questionB/questionB.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { QuestionEComponent } from '../questionE/questionE.component';


@Component({
  selector: 'app-questionD',
  templateUrl: './questionD.component.html',
  styleUrls: ['./questionD.component.css']
})
export class QuestionDComponent implements OnInit {

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
    'At work people would best describe me as assertive', //Dominance
    'At work people would best describe me as accurate', //Precise
    'At work people would best describe me as thoughtful', //DownToEarth
    'At work people would best describe me as energetic', //Animated
    'At work people would best describe me as optimistic', //Convincing
    'At work people would best describe me as obliging', //Accommodate
    'At work people would best describe me as independant', //Introvert
    'At work people would best describe me as go-getting' //Headstrong
  ];

  constructor(public authService: AuthService, public router: Router, public service: MainContentService, public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionDComponent>) {
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
     this.dialog.open(QuestionEComponent, {
      disableClose: true,
      height: '1000px',
      width: '50%',
     })
   }
  onScoreTotal() {
    this.questions.reverse();
    this.dominance = this.questions.indexOf('At work people would best describe me as assertive');
    this.service.totalDominance.push(this.dominance + 1)
    this.precise = this.questions.indexOf('At work people would best describe me as accurate');
    this.service.totalPrecise.push(this.precise + 1);
    this.earth = this.questions.indexOf('At work people would best describe me as thoughtful');
    this.service.totalEarth.push(this.earth + 1);
    this.animated = this.questions.indexOf('At work people would best describe me as energetic');
    this.service.totalAnimated.push(this.animated + 1)
    this.convincing = this.questions.indexOf('At work people would best describe me as optimistic');
    this.service.totalConvincing.push(this.convincing + 1);
    this.accommodate = this.questions.indexOf('At work people would best describe me as obliging');
    this.service.totalAccommodate.push(this.accommodate + 1);
    this.introvert = this.questions.indexOf('At work people would best describe me as independant');
    this.service.totalIntrovert.push(this.introvert + 1);
    this.headstrong = this.questions.indexOf('At work people would best describe me as go-getting');
    this.service.totalHeadstrong.push(this.headstrong + 1);
    // console.log(this.service.totalAccommodate.pop());
    this.closeDialog();
    this.openQuestionB();
  }
}



