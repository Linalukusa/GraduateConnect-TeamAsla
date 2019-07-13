import { Component, OnInit } from '@angular/core';
import { MainContentService } from '../services/main-content.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  public demoradarChartLabels:string[] = ['Dominant', 'Convincing', 'Down to Earth', 'Introverted', 'Headstrong', 'Animated', 'Precise', 'Accommodating'];
 
  public demoradarChartData:any = [
    {data: [40, 35, 25, 20, , 33, 25, 15], label: 'Graduate Graph'},
    {data: [32, 25, 34, 14, 17, 11, 36, 11], label: 'Tech-Company Graph'}
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

