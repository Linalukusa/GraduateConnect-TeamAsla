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
  obj: Answer;
  demoradarChartData = [];
  radarChartType:string = 'radar';
  demoradarChartLabels = ['Dominant', 'Convincing', 'Down to Earth', 'Introverted', 'Headstrong', 'Animated', 'Precise', 'Accommodating'];

  constructor(public authService: AuthService, public router: Router, public service: MainContentService, public crud: CrudService) { }

  ngOnInit() {
    // this.loading = true;
    // this.totalArray = this.crud.getTotalArray('id');
    // this.demoradarChartData = [
    //   {data: this.totalArray , label: 'Graduate Graph'},
    //   {data: [10, 20, 30, 40, 50, 60, 70, 80], label: 'Tech-Company Graph'}
    // ];
    // this.loading = false;
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

