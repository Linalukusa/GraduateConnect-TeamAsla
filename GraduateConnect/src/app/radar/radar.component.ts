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

  totalArray = [];
  loading = false;

  constructor(public authService: AuthService, public router: Router, public service: MainContentService, public crud: CrudService) { }

  ngOnInit() {
    this.loading = true;
    this.totalArray = this.crud.getTotalArray('id');
    this.demoradarChartData = [
      {data: this.totalArray , label: 'Graduate Graph'},
      {data: [10, 20, 30, 40, 50, 60, 70, 80], label: 'Tech-Company Graph'}
    ];
    this.loading = false;
  }

  obj: Answer;
   demoradarChartLabels = ['Dominant', 'Convincing', 'Down to Earth', 'Introverted', 'Headstrong', 'Animated', 'Precise', 'Accommodating'];
 
   demoradarChartData = [];
   radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  

}

