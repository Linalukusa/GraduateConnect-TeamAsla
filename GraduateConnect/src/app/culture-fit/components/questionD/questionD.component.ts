import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService } from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialog, MatDialogRef } from '@angular/material';
import { QuestionEComponent } from '../questionE/questionE.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-question-d',
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
    '1  ~  At work people would best describe me as assertive', //Dominance
    '2  ~  At work people would best describe me as accurate', //Precise
    '3  ~  At work people best describe me as thoughtful', //DownToEarth
    '4  ~  At work people would best describe me as energetic', //Animated
    '5  ~  At work people would best describe me as optimistic', //Convincing
    '6  ~  At work people would best describe me as obliging', //Accommodate
    '7  ~  At work people would best describe me as independent', //Introvert
    '8  ~  At work people would best describe me as go-getting' //Headstrong
  ];

  constructor(
    public authService: AuthService,
    public router: Router,
    public service: MainContentService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionDComponent>) { this.obj = new Answer()}

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
  openQuestionE()
   {
     this.dialog.open(QuestionEComponent, {
      disableClose: true,
      height: '1000px',
      width: '50%',
     })
   }

  onScoreTotal() {
    this.dominance = this.questions.indexOf('1  ~  At work, if I am a leader, I expect others to follow what I say');
    this.service.totalDominance.push(this.dominance + 1)
    this.precise = this.questions.indexOf('2  ~  At work people should follow carefully laid down procedures');
    this.service.totalPrecise.push(this.precise + 1);
    this.earth = this.questions.indexOf('3  ~  At work leaders should seek consensus before proceeding');
    this.service.totalEarth.push(this.earth + 1);
    this.animated = this.questions.indexOf('4  ~  At work there are too many rules and they get in the way of doing the job');
    this.service.totalAnimated.push(this.animated + 1)
    this.convincing = this.questions.indexOf('5  ~  At work people should be persuaded to do things');
    this.service.totalConvincing.push(this.convincing + 1);
    this.accommodate = this.questions.indexOf('6  ~  At work people should accommodate and serve their leader');
    this.service.totalAccommodate.push(this.accommodate + 1);
    this.introvert = this.questions.indexOf('7  ~  At work once you know what is required, you should be left to get on with it');
    this.service.totalIntrovert.push(this.introvert + 1);
    this.headstrong = this.questions.indexOf('8  ~  At work there is too much to do to wait for instructions');
    this.service.totalHeadstrong.push(this.headstrong + 1);
    console.log(this.service.totalAccommodate.pop());
    this.closeDialog();
    this.openQuestionE();
  }

}
