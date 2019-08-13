import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MainContentService } from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
import { MatDialogRef } from '@angular/material';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-question-e',
  templateUrl: './questionE.component.html',
  styleUrls: ['./questionE.component.css']
})
export class QuestionEComponent implements OnInit {
  public cultureForm: FormGroup;
  obj: Answer;
  hide: boolean = false;
  dominance: number;
  precise: number;
  earth: number;
  animated: number;
  convincing: number;
  accommodate: number;
  introvert: number;
  headstrong: number;

  questions = [
    'I can best de described as competitive and decisive', //Dominance
    'I can be best described as precise, systematic and compliant', //Precise
    'I can be best described as team-focused, reliable and persistent', //DownToEarth
    'I can best be described as unconventional, creative and independent', //Animated
    'I can best be described as poised, persuasive and optimistic', //Convincing
    'I can best be described as diplomatic and modest', //Accommodate
    'I can be describe as intuitive, introspective and exploring', //Introvert
    'I can best be described as eager, outgoing and mobile' //Headstrong
  ];

  constructor(public authService: AuthService,
              public router: Router, public service: MainContentService,
              public dialogRef: MatDialogRef<QuestionEComponent>,
              public crudApi: CrudService,  // CRUD API services
              public fb: FormBuilder,       // Form Builder service for Reactive forms
               // Toastr service for alert message
              ) {
              this.obj = new Answer()}

  drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }
  ngOnInit() {
    this.crudApi.GetCulturesList();
    this.culturForm();
  }
  closeDialog()
  {
    this.dialogRef.close();
  }
  onSubmit()
  { 
    this.router.navigate(['radar']);  
  }
  culturForm() {
    this.cultureForm = this.fb.group({
      Dominant:[this.service.totalDominance.reduce((a, b) => a + b, 0),],
      Precise:[this.service.totalPrecise.reduce((a, b) => a + b, 0),],
      Earth:[this.service.totalEarth.reduce((a, b) => a + b, 0),],
      Animated:[this.service.totalAnimated.reduce((a, b) => a + b, 0),],
      Convincing:[this.service.totalConvincing.reduce((a, b) => a + b, 0),],
      Accommodate:[this.service.totalAccommodate.reduce((a, b) => a + b, 0),],
      Introvert:[this.service.totalIntrovert.reduce((a, b) => a + b, 0),],
      Headstrong:[this.service.totalHeadstrong.reduce((a, b) => a + b, 0),],

 
    })  
  }
  get Dominant() {
    return this.cultureForm.get ('dominant');
  }
  get Precise() {
    return this.service.totalPrecise.reduce((a, b) => a + b, 0);
  }
  get Earth() {
    return this.service.totalEarth.reduce((a, b) => a + b, 0);
  }
  get Animated() {
    return this.service.totalAnimated.reduce((a, b) => a + b, 0);
  }
  get Convincing() {
    return this.service.totalConvincing.reduce((a, b) => a + b, 0);
  }
  get Accomodate() {
    return this.service.totalAccommodate.reduce((a, b) => a + b, 0);
  }
  get Introvert() {
    return this.service.totalIntrovert.reduce((a, b) => a + b, 0);
  }
  get Headstrong() {
    return this.service.totalHeadstrong.reduce((a, b) => a + b, 0);
  }

  ResetForm() {
    this.cultureForm.reset();
  }

  onScoreTotal(){
    this.questions.reverse();
    this.closeDialog();
    this.dominance = this.questions.indexOf('I can best de described as competitive and decisive');
    this.service.totalDominance.push(this.dominance + 1)
    this.precise = this.questions.indexOf('I can be best described as precise, systematic and compliant');
    this.service.totalPrecise.push(this.precise + 1);
    this.earth = this.questions.indexOf('I can be best described as team-focused, reliable and persistent');
    this.service.totalEarth.push(this.earth + 1);
    this.animated = this.questions.indexOf('I can best be described as unconventional, creative and independent');
    this.service.totalAnimated.push(this.animated + 1)
    this.convincing = this.questions.indexOf('I can best be described as poised, persuasive and optimistic');
    this.service.totalConvincing.push(this.convincing + 1);
    this.accommodate = this.questions.indexOf('I can best be described as diplomatic and modest');
    this.service.totalAccommodate.push(this.accommodate + 1);
    this.introvert = this.questions.indexOf('I can be describe as intuitive, introspective and exploring');
    this.service.totalIntrovert.push(this.introvert + 1);
    this.headstrong = this.questions.indexOf('I can best be described as eager, outgoing and mobile');
    this.service.totalHeadstrong.push(this.headstrong + 1);
    console.log(this.service.totalDominance.reduce((a, b) => a + b, 0));
    console.log(this.service.totalPrecise.reduce((a, b) => a + b, 0));
    console.log(this.service.totalAccommodate.reduce((a, b) => a + b, 0));
   
    // this.popCultureForm();
    alert("Your Results Have Been Captured!!!");
   
    this.onSubmit();
    this.hide = true;
  }
     
popCultureForm(){
  this.dominance = this.service.totalDominance.reduce((a, b) => a + b, 0);
  this.precise = this.service.totalPrecise.reduce((a, b) => a + b, 0);
  this.earth = this.service.totalEarth.reduce((a, b) => a + b, 0);
  this.animated = this.service.totalAnimated.reduce((a, b) => a + b, 0);
  this.convincing = this.service.totalConvincing.reduce((a, b) => a + b, 0);
  this.accommodate = this.service.totalAccommodate.reduce((a, b) => a + b, 0);
  this.introvert = this.service.totalIntrovert.reduce((a, b) => a + b, 0);
  this.headstrong = this.service.totalHeadstrong.reduce((a, b) => a + b, 0);
}
  submitCultureData() {
    this.crudApi.AddCulture(this.cultureForm.value); // Submit student data using CRUD API
    this.ResetForm();
   };
   isHovering: boolean;

   files: File[] = [];
 
   toggleHover(event: boolean) {
     this.isHovering = event;
   }
 
   onDrop(files: FileList) {
     for (let i = 0; i < files.length; i++) {
       this.files.push(files.item(i));
     }
   }
 }
