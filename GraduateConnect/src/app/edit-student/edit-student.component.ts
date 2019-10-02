import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';
import { WelcomeModalComponent } from '../components/welcome-modal/welcome-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {
  editForm: FormGroup;  // Define FormGroup to student's edit form
  public dialog: MatDialog;
  
  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ){ }

  ngOnInit() {
    this.updateStudentData();   // Call updateStudentData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.GetStudent(id).valueChanges().subscribe(data => {
      
    this.dialog.open(WelcomeModalComponent, {
          disableClose: true,
          height: '1000px',
          width: '70%',
        })

         this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
   
   
    })
  }

  // Accessing form control using getters
  get gender() {
    return this.editForm.get('gender');
  }
  get tile() {
    return this.editForm.get('title');
  }
  get ethnicity() {
    return this.editForm.get('ethnicity');
  }
  get firstName() {
    return this.editForm.get('firstName');
  }

  // get lastName() {
  //   return this.editForm.get('lastName');
  // }  

  get email() {
    return this.editForm.get('email');
  }
  // get PreferredName (){
  //   return this.editForm.get ('PreferredName')
  // }
  get dob() {
    return this.editForm.get('dob');
  }
  get citizenship() {
    return this.editForm.get('citizenship');
  }
  get currentcity (){
    return this.editForm.get ('currentcity')
  }

  get mobileNumber() {
    return this.editForm.get('mobileNumber');
  }
  get passport() {
    return this.editForm.get('passport');
  }
  get currentprovince() {
    return this.editForm.get('currentprovince');
  }

  // Contains Reactive Form logic
  updateStudentData() {
    this.editForm = this.fb.group({
      gender:['',],
      title: ['',],
      ethnicity:['',],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      // PreferredName: ['', ],
      dob:['',Validators.required],
      citizenship:['',Validators.required,],
      currentcity: ['',[Validators.required,Validators.minLength(2)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      passport:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
 
      currentprovince: ['', ],
    })
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }

  // Below methods fire when somebody click on submit button
  updateForm(){
    this.crudApi.UpdateStudent(this.editForm.value);       // Update student data using CRUD API
    this.toastr.success(this.editForm.controls['firstName'].value + ' updated successfully');   // Show succes message when data is successfully submited
    this.router.navigate(['view-students']);               // Navigate to student's list page when student data is updated
  }

}