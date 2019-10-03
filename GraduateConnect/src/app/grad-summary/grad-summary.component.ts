import { Component, OnInit } from '@angular/core';
import { MainContentService } from '../services/main-content.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Answer } from '../culture-fit/Models/Answer';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-grad-summary',
  templateUrl: './grad-summary.component.html',
  styleUrls: ['./grad-summary.component.css']
})
export class GradSummaryComponent implements OnInit {

  totalArray = this.service.totalArray;
  topCulture:number;
  loading = false;
  obj: Answer;
  demoradarChartData = [];
  cultures = [];
  max = this.demoradarChartData[0];
  index:number;
  i:number;
  radarChartType:string = 'radar';
  demoradarChartLabels = ['Dominant', 'Precise', 'Down to Earth','Animated', 'Convincing', 'Accommodating', 'Introverted', 'Headstrong'   ];

  
  constructor(public authService: AuthService, public router: Router, public service: MainContentService, public crud: CrudService) { }
 
  ngOnInit() {
    this.loading = true;
    //  this.totalArray = this.crud.getTotalArray('id');
    this.demoradarChartData = [
       {data: [this.service.totalDominance.reduce((a, b) => a + b, 0), this.service.totalPrecise.reduce((a, b) => a + b, 0), this.service.totalEarth.reduce((a, b) => a + b, 0), this.service.totalAnimated.reduce((a, b) => a + b, 0), this.service.totalConvincing.reduce((a, b) => a + b, 0), this.service.totalAccommodate.reduce((a, b) => a + b, 0), this.service.totalIntrovert.reduce((a, b) => a + b, 0), this.service.totalHeadstrong.reduce((a, b) => a + b, 0) ],
         label: 'Company Culture Breakdown',
         options:{
         tooltips: {
          callbacks: {
             label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';
                //return text to render for an individual item in the tooltip
                return 'This is a custom tooltip';
             }
          }
       }}}
      // {data: [10, 20, 30, 40, 50, 60, 70, 80], label: 'Tech-Company Graph'}
    ];
    this.cultures = [this.service.totalDominance.reduce((a, b) => a + b, 0), this.service.totalPrecise.reduce((a, b) => a + b, 0), this.service.totalEarth.reduce((a, b) => a + b, 0), this.service.totalAnimated.reduce((a, b) => a + b, 0), this.service.totalConvincing.reduce((a, b) => a + b, 0), this.service.totalAccommodate.reduce((a, b) => a + b, 0), this.service.totalIntrovert.reduce((a, b) => a + b, 0), this.service.totalHeadstrong.reduce((a, b) => a + b, 0) ]
    // for ( this.i = 0; this.i < this.demoradarChartData.length; this.i++) 
		// {
		// 	if (this.max < this.demoradarChartData[this.i]) 
		// 	{
		// 		this.max = this.demoradarChartData[this.i];
		// 		this.index = this.i;
		// 	}
		// }

    // this.topCulture = this.index;
    this.topCulture = this.cultures.indexOf(Math.max(...this.cultures));
    console.log(this.topCulture);
    
    this.loading = false;
   this.cultureText();
  console.log(this.totalArray);
  }
  cultureText() {
    if (this.topCulture != 0) {
      document.getElementById('dominant').style.display = "none"; 
    }
     if (this.topCulture != 1) {
      document.getElementById('precise').style.display = "none"; 
    }
    if (this.topCulture != 2) {
      document.getElementById('earth').style.display = "none"; 
    }
     if (this.topCulture != 3) {
      document.getElementById('animated').style.display = "none"; 
    }
     if (this.topCulture != 4) {
      document.getElementById('convincing').style.display = "none"; 
    }
     if (this.topCulture != 5) {
      document.getElementById('accomodate').style.display = "none"; 
    }
     if (this.topCulture != 6) {
      document.getElementById('introvert').style.display = "none"; 
    }
     if (this.topCulture != 7) {
      document.getElementById('headstrong').style.display = "none"; 
    }
  }
  public top() 
	{

	

		for ( this.i = 0; this.i < this.demoradarChartData.length; this.i++) 
		{
			if (this.max < this.demoradarChartData[this.i]) 
			{
				this.max = this.demoradarChartData[this.i];
				this.index = this.i;
			}
		}

    this.topCulture = this.index;
    console.log(this.topCulture);
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

