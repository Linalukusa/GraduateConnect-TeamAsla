import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MainContentService } from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-question-e',
  templateUrl: './questionE.component.html',
  styleUrls: ['./questionE.component.css']
})
export class QuestionEComponent implements OnInit {

  obj: Answer;
  hide: boolean = false;
  sum: number = 0;

  constructor(public authService: AuthService,
    public router: Router, public service: MainContentService,
    public dialogRef: MatDialogRef<QuestionEComponent>) { this.obj = new Answer()}

  ngOnInit() {
  }
  closeDialog(): void
  {
    this.dialogRef.close();
  }
  onSubmit(){
    
    this.router.navigate(['culture-fit-root/radar']);
    
  }
  onScoreTotal(){
    
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
      this.service.onCount();
      alert("Your Scores Have Been Submitted!!! Click Show Results to View Your Matching Chart");
      this.hide = true;
    }
    
  }
 }
