import { Component, OnInit } from '@angular/core';
import { MainContentService } from '../services/main-content.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Answer } from '../culture-fit/Models/Answer';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  totalArray = this.service.totalArray;
  topCulture = 0;
  loading = false;
  obj: Answer;
  demoradarChartData = [];
  radarChartType:string = 'radar';
  demoradarChartLabels = ['Dominant', 'Precise', 'Down to Earth','Animated', 'Convincing', 'Accommodating', 'Introverted', 'Headstrong'   ];

  constructor(public authService: AuthService, public router: Router, public service: MainContentService, public crud: CrudService) { }

  ngOnInit() {
    this.loading = true;
    //  this.totalArray = this.crud.getTotalArray('id');
    this.demoradarChartData = [
       {data: [this.service.totalDominance.reduce((a, b) => a + b, 0), this.service.totalPrecise.reduce((a, b) => a + b, 0), this.service.totalEarth.reduce((a, b) => a + b, 0), this.service.totalAnimated.reduce((a, b) => a + b, 0), this.service.totalConvincing.reduce((a, b) => a + b, 0), this.service.totalAccommodate.reduce((a, b) => a + b, 0), this.service.totalIntrovert.reduce((a, b) => a + b, 0), this.service.totalHeadstrong.reduce((a, b) => a + b, 0) ], label: 'Graduate Graph'},
      // {data: [10, 20, 30, 40, 50, 60, 70, 80], label: 'Tech-Company Graph'}
    ];
    this.loading = false;
    if (this.topCulture != 0) {
      document.getElementById('dominant').style.display = "none"; 
    }
     if (this.topCulture != 1) {
      document.getElementById('convincing').style.display = "none"; 
    }
    if (this.topCulture != 2) {
      document.getElementById('earth').style.display = "none"; 
    }
     if (this.topCulture != 3) {
      document.getElementById('precise').style.display = "none"; 
    }
     if (this.topCulture != 4) {
      document.getElementById('accomodate').style.display = "none"; 
    }
     if (this.topCulture != 5) {
      document.getElementById('introvert').style.display = "none"; 
    }
     if (this.topCulture != 6) {
      document.getElementById('animated').style.display = "none"; 
    }
     if (this.topCulture != 7) {
      document.getElementById('headstrong').style.display = "none"; 
    }
  console.log(this.totalArray);
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
      //  console.log(this.service.totalArray.pop());
  }
 
  public chartHovered(e:any):void {
    console.log(e);
    
  }
  public adClick() {
    window.open('https://www.bbd.co.za/bbd-careers/details.html?nPostingId=14778&nPostingTargetId=65153&id=P4OFK026203F3VBQB798N79QY&LG=UK', '_blank');
  }
  

}

