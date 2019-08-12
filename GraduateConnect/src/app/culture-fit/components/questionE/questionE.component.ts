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
    '1  ~  I can best de described as competitive and decisive', //Dominance
    '2  ~  I can be best described as precise, systematic and compliant', //Precise
    '3  ~  I can be best described as team-focused, reliable and persistent', //DownToEarth
    '4  ~  I can best be described as unconventional, creative and independent', //Animated
    '5  ~  I can best be described as poised, persuasive and optimistic', //Convincing
    '6  ~  I can best be described as diplomatic and modest', //Accommodate
    '7  ~  I can be describe as intuitive, introspective and exploring', //Introvert
    '8  ~  I can best be described as eager, outgoing and mobile' //Headstrong
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
      Dominant:['',],
      Precise:['',],
      Earth:['',],
      Animated:['',],
      Convincing:['',],
      Accommodate:['',],
      Introvert:['',],
      Headstrong:['',],

 
    })  
  }
  get Dominant() {
    return this.service.totalDominance.reduce((a, b) => a + b, 0);
  }
  get Precise() {
    return this.cultureForm.get("Precise");
  }
  get Earth() {
    return this.cultureForm.get("Earth");
  }
  get Animated() {
    return this.cultureForm.get("Animated");
  }
  get Convincing() {
    return this.cultureForm.get("Convincing");
  }
  get Accomodate() {
    return this.cultureForm.get("Accomodatet");
  }
  get Introvert() {
    return this.cultureForm.get("Introvert");
  }
  get Headstrong() {
    return this.cultureForm.get("Headstrong");
  }

  ResetForm() {
    this.cultureForm.reset();
  }

  onScoreTotal(){
    this.questions.reverse();
    this.closeDialog();
    this.dominance = this.questions.indexOf('1  ~  I can best de described as competitive and decisive');
    this.service.totalDominance.push(this.dominance + 1)
    this.precise = this.questions.indexOf('2  ~  I can be best described as precise, systematic and compliant');
    this.service.totalPrecise.push(this.precise + 1);
    this.earth = this.questions.indexOf('3  ~  I can be best described as team-focused, reliable and persistent');
    this.service.totalEarth.push(this.earth + 1);
    this.animated = this.questions.indexOf('4  ~  I can best be described as unconventional, creative and independent');
    this.service.totalAnimated.push(this.animated + 1)
    this.convincing = this.questions.indexOf('5  ~  I can best be described as poised, persuasive and optimistic');
    this.service.totalConvincing.push(this.convincing + 1);
    this.accommodate = this.questions.indexOf('6  ~  I can best be described as diplomatic and modest');
    this.service.totalAccommodate.push(this.accommodate + 1);
    this.introvert = this.questions.indexOf('7  ~  I can be describe as intuitive, introspective and exploring');
    this.service.totalIntrovert.push(this.introvert + 1);
    this.headstrong = this.questions.indexOf('8  ~  I can best be described as eager, outgoing and mobile');
    this.service.totalHeadstrong.push(this.headstrong + 1);
    console.log(this.service.totalAccommodate.pop());
    this.submitCultureData();
    alert("Your Results Have Been Captured!!!");
    this.onSubmit();
    this.hide = true;
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
