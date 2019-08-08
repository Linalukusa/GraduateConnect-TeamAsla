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
    {data: [this.service.totalArray[0], this.service.totalArray[1], this.service.totalArray[2], this.service.totalArray[3], this.service.totalArray[4], this.service.totalArray[5], this.service.totalArray[6], this.service.totalArray[7]], label: 'Graduate Graph'}
    // {data: [10, 20, 30, 40, 50, 60, 70, 80], label: 'Tech-Company Graph'}
    
  ];
  public radarChartType:string = 'radar';
 
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
  constructor(public authService: AuthService, public router: Router, public service: MainContentService) { }

  ngOnInit() {
  }

}

