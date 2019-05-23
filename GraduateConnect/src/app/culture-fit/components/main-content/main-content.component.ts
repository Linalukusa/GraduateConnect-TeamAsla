import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService} from 'src/app/services/main-content.service';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  
  //   onDomCount(){
  //     this.dominant = this.dominant + this.dominant1;
  //   }
  //   onConvinceCount(){
  //     this.convincing = this.convincing + this.convincing1;
  //   }
  //   onEarthCount(){
  //     this.earth = this.earth + this.earth1;
  //   }
  //   onPreciseCount(){
  //     this.precise = this.precise + this.precise1;
  //   }
  //   onAccomodateCount(){
  //     this.accomodate = this.accomodate + this.accomodate1;
  //   }
  //   onIntrovertCount(){
  //     this.introvert = this.introvert + this.introver1;
  //   }
  //   onAnimateCount(){
  // this.animated = this.animated + this.animated1;
  //   }
  //   onHeadCount(){
  //     this.headstrong = this.headstrong + this.headstrong1;
  //   }
  //   count(){
  //     this.sum = this.earth1 + this.headstrong1 + this.animated1 + this.convincing1 + this.accomodate1 + this.dominant1 + this.precise1 + this.introver1;
  //     if (this.sum === 36){
  //     this.onHeadCount();
  //     this.onIntrovertCount();
  //     this.onAccomodateCount();
  //     this.onAnimateCount();
  //     this.onConvinceCount();
  //     this.onDomCount();
  //     this.onEarthCount();
  //     this.onPreciseCount();
  //     console.log(this.headstrong);
  //   }
  //   else {
  //     console.log("You cant have the same answer for multiple questions");
  //     console.log(this.sum);
  //   }
    
  // }
  constructor(public authService: AuthService, public router: Router, public mainContentService: MainContentService) { }

  onScoreTotal(){
    this.mainContentService.count();
  }

  onQuestion2(): void{
    this.router.navigate(['culture-fit-root/main-contentB']);
  }

  ngOnInit() {
  }
}



