import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-academic-info',
  templateUrl: './academic-info.component.html',
  styleUrls: ['./academic-info.component.css']
})
export class AcademicInfoComponent implements OnInit {
  public addForm: FormGroup;  // Define FormGroup to student's form
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService,  // Toastr service for alert message
    private authService: AuthService
  ) { }

 
  ngOnInit() {
    this.crudApi.GetAcademicList();  // Call GetStudentsList() before main form is being called
    this.academicForm();              // Call student form when component is ready
  }

  // Reactive student form
  academicForm() {
    this.addForm = this.fb.group({  
    year:['',],
    institution:['',],
    qualification: ['',],
    specialisation: ['',],
    program:['',],
    course: ['',],
    coursecode: ['',],
    nqfcredit: ['',],
    result: ['',],
    language:['',],
    levelofspeaking: ['',],
    skill:['',],
    levelofknowledge: ['',],
     
     
    })  
  }

  // Accessing form control using getters
  get year() {
    return this.addForm.get('year');
  }
  get institution() {
    return this.addForm.get('institution');
  }
  get qualification() {
    return this.addForm.get('qualification');
  }
  get specialisation() {
    return this.addForm.get('specialisation');
  }

  get program() {
    return this.addForm.get('program');
  }  

  get course() {
    return this.addForm.get('course');
  }
  get  coursecode (){
    return this.addForm.get (' coursecode')
  }
  get nqfcredit() {
    return this.addForm.get('nqfcredit');
  }
  get  result() {
    return this.addForm.get(' result');
  }
  get language(){
    return this.addForm.get ('language')
  }

  get levelofspeaking() {
    return this.addForm.get('levelofspeaking');
  }
  get skill() {
    return this.addForm.get('skill');
  }
  get levelofknowledge() {
    return this.addForm.get('levelofknowledge');
  }

  // Reset student form's values
  ResetForm() {
    this.addForm.reset();
  }  
 
  submitAcademicData() {
    this.crudApi.AcademicInfo(this.addForm.value); // Submit student data using CRUD API
    
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


