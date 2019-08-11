import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { AuthService } from '../shared/services/auth.service';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  public studentForm: FormGroup;  // Define FormGroup to student's form
 
  
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService,  // Toastr service for alert message
    private authService: AuthService,
    public dialog: MatDialog
    // public dialogRef: MatDialogRef<DashboardComponent>
  ) { }

 
  ngOnInit() {
    this.crudApi.GetStudentsList();  // Call GetStudentsList() before main form is being called
    this.studenForm();              // Call student form when component is ready
     this.dialog.open(DashboardComponent, {
       disableClose: true,
       height: '515px',
      width: '75%',
     })
   
  
  }


  // Reactive student form
  studenForm() {
    this.studentForm = this.fb.group({
      gender:['',],
      title: ['',],
      ethnicity:['',Validators.required,],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      PreferredName: ['', ],
      dob:['',Validators.required],
      citizenship:['',Validators.required,],
      currentcity: ['',[Validators.required,Validators.minLength(2)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      passport:['', [Validators.maxLength(3), Validators.required]],
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

  get lastName() {
    return this.studentForm.get('lastName');
  }  

  get email() {
    return this.studentForm.get('email');
  }
  get PreferredName (){
    return this.studentForm.get ('PreferredName')
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
 
  submitStudentData() {
    this.crudApi.AddStudent(this.studentForm.value); // Submit student data using CRUD API
    this.toastr.success(this.studentForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
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