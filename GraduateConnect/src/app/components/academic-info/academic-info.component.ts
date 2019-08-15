import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material';
import { LangDialogComponent } from 'src/app/lang-dialog/lang-dialog.component';
import { QualDialogComponent } from 'src/app/qual-dialog/qual-dialog.component';
import { Router } from '@angular/router';
import { MainContentService } from 'src/app/services/main-content.service';

@Component({
  selector: 'app-academic-info',
  templateUrl: './academic-info.component.html',
  styleUrls: ['./academic-info.component.css']
})
export class AcademicInfoComponent implements OnInit {
  public addForm: FormGroup;  // Define FormGroup to student's form
  mylang: string;
    myqual : string;
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public dialog: MatDialog,
    public router: Router, public service: MainContentService,
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
 next(){
  alert("Academic details submitted"); 
  this.router.navigate(['culture-fit-info']);
 }
   onDrop(files: FileList) {
     for (let i = 0; i < files.length; i++) {
       this.files.push(files.item(i));
     }
   }

   

   openDialog(): void {
    let dialogRef = this.dialog.open(LangDialogComponent, {
      width: '750px',
     data: { mylang: this.mylang}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.language = result;
      this.mylang = result;
      console.log(result);
     
    });
  }

  openQualDialog(): void {
    let dialogRef = this.dialog.open(QualDialogComponent, {
      width: '750px',
     data: { myqual: this.myqual}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      this.myqual = result;
      console.log(result);
     
    });
  }

}




