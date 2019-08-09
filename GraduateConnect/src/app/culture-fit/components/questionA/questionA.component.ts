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
  questions = [
    '1  ~  I Prefer To Be Assertive', //Dominance
    '2  ~  I Prefer To Follow Regulations In My Workspace', //Precise
    '3  ~  I Prefer To Join In With Others', //DownToEarth
    '4  ~  I Prefer To Move At A Fast Pace', //Animated
    '5  ~  I Prefer To Influence People', //Convincing
    '6  ~  I Prefer To Accommodate Others Wishes', //Accommodate
    '7  ~  I Prefer To Work Quietly On My Own', //Introvert
    '8  ~  I Prefer To Work Independently' //Headstrong
  ];

  constructor(public authService: AuthService, public router: Router, public service: MainContentService, public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionAComponent>) {
    this.obj = new Answer();
   }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
    console.log(this.questions);
  }
   closeDialog(): void
   {
    this.dialogRef.close();
   }
   openQuestionB()
   {
     this.dialog.open(QuestionBComponent, {
      height: '1000px',
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
    this.closeDialog();
    this.openQuestionB();
    
  }
}



