import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  public demoradarChartLabels:string[] = ['Dominant', 'Convincing', 'Down to Earth', 'Introverted', 'Headstrong', 'Animated', 'Precise', 'Accommodating'];
 
  public demoradarChartData:any = [
    {data: [30, 40, 15, 30, 12], label: 'Culture Split'},
    // {data: [30, 40, 20, 35, 15], label: 'Company B'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}

