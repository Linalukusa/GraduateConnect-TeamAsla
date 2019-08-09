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
  questions = [
    '1  ~  At work, if I am a leader, I expect others to follow what I say', //Dominance
    '2  ~  At work people should follow carefully laid down procedures', //Precise
    '3  ~  At work leaders should seek consensus before proceeding', //DownToEarth
    '4  ~  At work there are too many rules and they get in the way of doing the job', //Animated
    '5  ~  At work people should be persuaded to do things', //Convincing
    '6  ~  At work people should accommodate and serve their leader', //Accommodate
    '7  ~  At work once you know what is required, you should be left to get on with it', //Introvert
    '8  ~  At work there is too much to do to wait for instructions' //Headstrong
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
      height: '1000px',
      width: '70%',
     })
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
    this.closeDialog();
    this.openQuestionD();
  }
}
