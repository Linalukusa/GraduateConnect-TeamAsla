import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { MainContentService } from '../services/main-content.service';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {

  constructor(
    public router: Router, public service: MainContentService,) { 
    
  }

  ngOnInit() {
  
  }
  sql = false;
    swagger = false;
    cPlus = false;
    cSharp = false;
    typescript = false;



    next(){
      alert("Academic details submitted"); 
      this.router.navigate(['culture-fit-info']);
     }
}
