import { Component, OnInit } from '@angular/core';
import {QuestionAComponent} from '../../components/questionA/questionA.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService } from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialog, MatDialogRef } from '@angular/material';
import { QuestionCComponent } from '../questionC/questionC.component';
// import 'count()'import { count } from 'rxjs/operators';
//  from '../main-content/main-content.component';


@Component({
  selector: 'app-questionB',
  templateUrl: './questionB.component.html',
  styleUrls: ['./questionB.component.css']
})
export class QuestionBComponent implements OnInit {

  obj: Answer;
  sum: number = 0;

  constructor(
    public authService: AuthService,
    public router: Router,
    public service: MainContentService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionBComponent>) { this.obj = new Answer() }


    onQuestion3() {
      this.router.navigate(['culture-fit-root/questionC']);
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
    this.sum = this.service.totalDominance.pop() + this.service.totalConvincing.pop() +
    this.service.totalEarth.pop() + this.service.totalPrecise.pop() + this.service.totalAccommodate.pop() +
    this.service.totalIntrovert.pop() + this.service.totalAnimated.pop() + this.service.totalHeadstrong.pop()
    if(!(this.sum === 36))
    {
      alert("Each Question Must Have A Unique Value!!!");
    }
    else{
      this.closeDialog();
      this.openQuestionC();
    }
  }
}
