import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { AuthService } from '../shared/services/auth.service';
import { WelcomeModalComponent } from '../components/welcome-modal/welcome-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainContentService } from '../services/main-content.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../shared/services/user';
import { Student } from '../shared/student';
import { StudentsListComponent } from '../students-list/students-list.component';


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})

export class BasicInformationComponent implements OnInit {
  public studentForm: FormGroup;  // Define FormGroup to student's form
  student: Student;
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService,  // Toastr service for alert message
    private authService: AuthService,
    public dialog: MatDialog,
    public router: Router,
    public service: MainContentService,
    public afAuth:AngularFireAuth,
    public afs: AngularFirestore,
    // public dialogRef: MatDialogRef<WelcomeModalComponent>
  ) { }

  ngOnInit() {
    this.crudApi.GetStudentsList();  // Call GetStudentsList() before main form is being called
    this.studenForm();// Call student form when component is ready

    if(this.authService.userData.generalInfoComplete === true)
    {
      console.log("You have completed this step before");
    }
    this.dialog.open(WelcomeModalComponent, {
      disableClose: true,
      height: '550px',
      width: '75%',
      })
    
  }
  //Checking if the General Information step has been completed
  isGeneralInfoComplete()
  {
    this.student.generalInfoComplete = true;
    this.crudApi.UpdateStudent(this.student);
  }
  // Reactive student form
  studenForm() {
    this.studentForm = this.fb.group({
      gender:['',],
      title: ['',],
      disability: ['',],
      ethnicity:['',Validators.required,],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      dob:['',Validators.required],
      citizenship:['',Validators.required,],
      currentcity: ['',[Validators.required,]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      passport:['', [Validators.minLength(6), Validators.required]],
      currentprovince: ['', [Validators.maxLength(32), Validators.required]],
      
    })  
  }

  // Accessing form control using getters
  get gender() {
    return this.studentForm.get('gender');
  }
  get title() {
    return this.studentForm.get('title');
  }
  get ethnicity() {
    return this.studentForm.get('ethnicity');
  }
  get firstName() {
    return this.studentForm.get('firstName');
  }
  get disability() {
    return this.studentForm.get('disability');
  }
  get email() {
    return this.studentForm.get('email');
  }
 
  get dob() {
    return this.studentForm.get('dob');
  }
  get citizenship() {
    return this.studentForm.get('citizenship');
  }
  get currentcity (){
    return this.studentForm.get ('currentcity')
  }

  get mobileNumber() {
    return this.studentForm.get('mobileNumber');
  }
  get passport() {
    return this.studentForm.get('passport');
  }
  get currentprovince() {
    return this.studentForm.get('currentprovince');
  }

  // Reset student form's values
  ResetForm() {
    this.studentForm.reset();
  }  
 submit(){
  this.student.generalInfoComplete = true;
  this.crudApi.UpdateStudent(this.student);
   this.authService.checkGeneralInfo();
   alert("Personal Details Submitted");
  this.router.navigate(['academic-results']);
 }
  submitStudentData() {
    this.crudApi.BasicInformation(this.studentForm.value); // Submit student data using CRUD API
    this.toastr.success(this.studentForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();
    this.router.navigate(['academic-results']);  // Reset form when clicked on reset button
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