import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  
  dominant1: number = 1;
  convincing1: number = 1;
  earth1: number = 1;
  precise1: number = 1;
  accomodate1: number = 1;
  introver1: number = 1;
  animated1: number = 1;
  headstrong1: number = 1;
  dominant: number=0;
  convincing: number = 0;
  earth: number = 0;
  precise: number = 0;
  accomodate: number = 0;
  introvert: number = 0;
  animated: number = 0;
  headstrong: number = 0;
  sum: number = 0;
// set tickInterval(value) {
//   this._tickInterval = coerceNumberProperty(value);
// }
// private _tickInterval = 1;
  onDomCount(){
    this.dominant = this.dominant + this.dominant1;
  }
  onConvinceCount(){
    this.convincing = this.convincing + this.convincing1;
  }
  onEarthCount(){
    this.earth = this.earth + this.earth1;
  }
  onPreciseCount(){
    this.precise = this.precise + this.precise1;
  }
  onAccomodateCount(){
    this.accomodate = this.accomodate + this.accomodate1;
  }
  onIntrovertCount(){
    this.introvert = this.introvert + this.introver1;
  }
  onAnimateCount(){
this.animated = this.animated + this.animated1;
  }
  onHeadCount(){
    this.headstrong = this.headstrong + this.headstrong1;
  }

  count(){
    this.sum = this.earth1 + this.headstrong1 + this.animated1 + this.convincing1 + this.accomodate1 + this.dominant1 + this.precise1 + this.introver1;
    if (this.sum = 36){
    this.onHeadCount();
    this.onAccomodateCount();
    this.onAnimateCount();
    this.onConvinceCount();
    this.onDomCount();
    this.onEarthCount();
    this.onIntrovertCount();
    this.onPreciseCount();
  }
  else {
    console.log("You cant have the same answer for multiple questions");
  }
  }
  constructor() { }

  ngOnInit() {
  }

}
