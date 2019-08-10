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
  questions = [
    '1  ~  I like to direct other peoples activities', //Dominance
    '2  ~  I like to be formal and work to standards', //Precise
    '3  ~  I like a close-knit team in which to work', //DownToEarth
    '4  ~  I like to do complete tasks quickly myself for the best results', //Animated
    '5  ~  I like to convince people to carry out activities', //Convincing
    '6  ~  I like to be clearly told what to do', //Accommodate
    '7  ~  I like to be left to get on with it', //Introvert
    '8  ~  I like to create things' //Headstrong
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
    this.openQuestionC();
  }
}
