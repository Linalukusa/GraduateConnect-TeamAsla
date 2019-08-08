import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MainContentService } from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';

@Component({
  selector: 'app-question-e',
  templateUrl: './questionE.component.html',
  styleUrls: ['./questionE.component.css']
})
export class QuestionEComponent implements OnInit {

  obj: Answer;

  constructor(public authService: AuthService,
    public router: Router, public service: MainContentService) { this.obj = new Answer()}

  ngOnInit() {
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
    this.service.onCount();
    this.router.navigate(['culture-fit-root/radar']);
  }
 }
