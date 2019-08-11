import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
     
    @Injectable({
      providedIn: 'root',
    })
    export class MainContentService{
      
      totalDominance: Array<number> = [];
      totalConvincing: Array<number> = [];
      totalEarth: Array<number> = [];
      totalPrecise: Array<number> = [];
      totalAccommodate: Array<number> = [];
      totalIntrovert: Array<number> = [];
      totalAnimated: Array<number> = [];
      totalHeadstrong: Array<number> = [];
      totalArray: Array<number> = [];

      constructor(public authService: AuthService,
        public router: Router){}

      countObjTotal (scores: Array<number>) {
        let total = 0;

        scores.map( i => {
          total += i;
          this.totalArray.push(total);
        });
        return this.totalArray;
      }

      onCount(){
        this.countObjTotal(this.totalDominance);
        this.countObjTotal(this.totalConvincing);
        this.countObjTotal(this.totalEarth);
        this.countObjTotal(this.totalPrecise);
        this.countObjTotal(this.totalAccommodate);
        this.countObjTotal(this.totalIntrovert);
        this.countObjTotal(this.totalAnimated);
        this.countObjTotal(this.totalHeadstrong);
      }
    }
      // onConvinceCount(){
      //   this.convincing = this.convincing + this.convincingA;
      // }
      // onEarthCount(){
      //   this.earth = this.earth + this.earthA;
      // }
      // onPreciseCount(){
      //   this.precise = this.precise + this.preciseA;
      // }
      // onAccomodateCount(){
      //   this.accomodate = this.accomodate + this.accomodateA;
      // }
      // onIntrovertCount(){
      //   this.introvert = this.introvert + this.introverA;
      // }
      // onAnimateCount(){
      //   this.animated = this.animated + this.animatedA;
      // }
      // onHeadCount(){
      //   this.headstrong = this.headstrong + this.headstrongA;
      

  //     count(scores: Array<number>){
  //       let total = 0;
  //       scores.map(score => {
  //         total += score;
  //       });

  //       return total;

  //       this.total = this.earthA + this.headstrongA + this.animatedA + this.convincingA + this.accomodateA + this.dominantA + this.preciseA + this.introverA;
  //       if(this.total === 9~){
  //         this.onDomCount();
  //         this.onIntrovertCount();
  //         this.onAccomodateCount();
  //         this.onAnimateCount();
  //         this.onConvinceCount();
  //         this.onEarthCount();
  //         this.onPreciseCount();
  //         this.onHeadCount();
  //         console.log(this.headstrong);
  //     }
  //       else {
  //         console.log("You cant have the same answer for multiple questions");
  //         console.log(this.total);
  //   }
  // }
  //     messages: string[] = [];
     
      
     
  //     clear() {
  //       this.messages = [];
  //     }

  //   }