import { Component, OnInit } from '@angular/core';
import {QuestionAComponent} from '../../components/questionA/questionA.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService } from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialog, MatDialogRef } from '@angular/material';
import { QuestionDComponent } from '../questionD/questionD.component';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-questionC',
  templateUrl: './questionC.component.html',
  styleUrls: ['./questionC.component.css']
})
export class QuestionCComponent implements OnInit {

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
    'At work, if I am a leader, I expect others to follow what I say', //Dominance
    'At work people should follow carefully laid down procedures', //Precise
    'At work leaders should seek consensus before proceeding', //DownToEarth
    'At work there are too many rules and they get in the way of doing the job', //Animated
    'At work people should be persuaded to do things', //Convincing
    'At work people should accommodate and serve their leader', //Accommodate
    'At work once you know what is required, you should be left to get on with it', //Introvert
    'At work there is too much to do to wait for instructions' //Headstrong
  ];

  constructor(
    public authService: AuthService,
    public router: Router,
    public service: MainContentService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionCComponent>) { this.obj = new Answer()}
    
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
  openQuestionD()
  {
     this.dialog.open(QuestionDComponent, {
      disableClose: true,
      height: '1000px',
      width: '50%',
     })
  }

  onScoreTotal() {
    this.questions.reverse();
    this.dominance = this.questions.indexOf('At work, if I am a leader, I expect others to follow what I say');
    this.service.totalDominance.push(this.dominance + 1)
    this.precise = this.questions.indexOf('At work people should follow carefully laid down procedures');
    this.service.totalPrecise.push(this.precise + 1);
    this.earth = this.questions.indexOf('At work leaders should seek consensus before proceeding');
    this.service.totalEarth.push(this.earth + 1);
    this.animated = this.questions.indexOf('At work there are too many rules and they get in the way of doing the job');
    this.service.totalAnimated.push(this.animated + 1)
    this.convincing = this.questions.indexOf('At work people should be persuaded to do things');
    this.service.totalConvincing.push(this.convincing + 1);
    this.accommodate = this.questions.indexOf('At work people should accommodate and serve their leader');
    this.service.totalAccommodate.push(this.accommodate + 1);
    this.introvert = this.questions.indexOf('At work once you know what is required, you should be left to get on with it');
    this.service.totalIntrovert.push(this.introvert + 1);
    this.headstrong = this.questions.indexOf('At work there is too much to do to wait for instructions');
    this.service.totalHeadstrong.push(this.headstrong + 1);
    // console.log(this.service.totalAccommodate.pop());
    this.closeDialog();
    this.openQuestionD();
  }
}
