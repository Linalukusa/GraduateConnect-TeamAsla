import { Component, OnInit } from '@angular/core';
import { MainContentService } from '../services/main-content.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Answer } from '../culture-fit/Models/Answer';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  obj: Answer;
  public demoradarChartLabels:string[] = ['Dominant', 'Convincing', 'Down to Earth', 'Introverted', 'Headstrong', 'Animated', 'Precise', 'Accommodating'];
 
  public demoradarChartData:any = [
    {data: [this.service.totalArray.shift(), 0, 0, 0, this.service.totalArray.pop(), 0, 0, 0], label: 'Graduate Graph'},
    {data: [10, 20, 30, 40, 50, 60, 70, 80], label: 'Tech-Company Graph'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor(public authService: AuthService, public router: Router, public service: MainContentService) { }

  ngOnInit() {
  }

}

