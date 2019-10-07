import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { MainContentService } from '../services/main-content.service';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {
    public skillForm: FormGroup;

    
        constructor(
          public crudApi: CrudService,  // CRUD API services
          public fb: FormBuilder,       // Form Builder service for Reactive forms
          public toastr: ToastrService,  // Toastr service for alert message
          private authService: AuthService
        ) { }
        ngOnInit() {
          this.crudApi.GetTechnicalList();  // Call GetStudentsList() before main form is being called
          this.technicalForm();              // Call student form when component is ready
        }
        // Reactive student form
    technicalForm() {
      this.skillForm = this.fb.group({
        angular:['',],
        c:['',],
        cPlus:['',],
        cSharp:['',],
        java:['',],
        javaScript:['',],

      })
    }
    // Accessing form control using getters
    get angular() {
      return this.skillForm.get('angular');
    }
    get c() {
      return this.skillForm.get('c');
    }
    get cPlus() {
      return this.skillForm.get('cPlus');
    }
    get cSharp() {
      return this.skillForm.get('cSharp');
    }
    get java() {
      return this.skillForm.get('java');
    }
    get javaScript() {
      return this.skillForm.get('javaScript');
    }
    submitStudentData() {
      //this.crudApi.AcademicInfo(this.addForm.value); // Submit student data using CRUD API
      this.crudApi.AddTechnical(this.skillForm.value); 
      
      //this.ResetForm();  // Reset form when clicked on reset button
    };
  }
