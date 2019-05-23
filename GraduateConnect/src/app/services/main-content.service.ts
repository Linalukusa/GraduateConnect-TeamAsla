import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
     
    @Injectable({
      providedIn: 'root',
    })
    export class MainContentService implements OnInit{
      ngOnInit(): void {
        throw new Error("Method not implemented.");
      }

      constructor(public authService: AuthService,
        public router: Router){}

      dominantA: number = 1;
      convincingA: number = 1;
      earthA: number = 1;
      preciseA: number = 1;
      accomodateA: number = 1;
      introverA: number = 1;
      animatedA: number = 1;
      headstrongA: number = 1;
      dominant: number=0;
      convincing: number = 0;
      earth: number = 0;
      precise: number = 0;
      accomodate: number = 0;
      introvert: number = 0;
      animated: number = 0;
      headstrong: number = 0;
      total: number = 0;

      onDomCount(){
        this.dominant = this.dominant + this.dominantA;
      }
      onConvinceCount(){
        this.convincing = this.convincing + this.convincingA;
      }
      onEarthCount(){
        this.earth = this.earth + this.earthA;
      }
      onPreciseCount(){
        this.precise = this.precise + this.preciseA;
      }
      onAccomodateCount(){
        this.accomodate = this.accomodate + this.accomodateA;
      }
      onIntrovertCount(){
        this.introvert = this.introvert + this.introverA;
      }
      onAnimateCount(){
        this.animated = this.animated + this.animatedA;
      }
      onHeadCount(){
        this.headstrong = this.headstrong + this.headstrongA;
      }

      count(){
        this.total = this.earthA + this.headstrongA + this.animatedA + this.convincingA + this.accomodateA + this.dominantA + this.preciseA + this.introverA;
        if(this.total === 8){
          this.onDomCount();
          this.onIntrovertCount();
          this.onAccomodateCount();
          this.onAnimateCount();
          this.onConvinceCount();
          this.onEarthCount();
          this.onPreciseCount();
          this.onHeadCount();
          console.log(this.headstrong);
      }
        else {
          console.log("You cant have the same answer for multiple questions");
          console.log(this.total);
    }
  }
      messages: string[] = [];
     
      add(message: string) {
        this.messages.push(message);
      }
     
      clear() {
        this.messages = [];
      }

    }