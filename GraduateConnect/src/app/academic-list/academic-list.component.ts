import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';  // CRUD API service class
import { Academic } from '../shared/academic'; // Student interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr


@Component({
  selector: 'app-academic-list',
  templateUrl: './academic-list.component.html',
  styleUrls: ['./academic-list.component.css']
})


  export class AcademicListComponent implements OnInit {
    p: number = 1;                      // Fix for AOT compilation error for NGX pagination
    Academic: Academic[];               // Save students data in Student's array.
    hideWhenNoAcademic: boolean = false; // Hide students data table when no student.
    noData: boolean = false;            // Showing No Student Message, when no student in database.
    preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
    
  constructor(
    public crudApi: CrudService, // Inject student CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
    ){ }


  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GetAcademicList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Academic = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Academic.push(a as Academic);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {     
    this.crudApi.GetAcademicList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoAcademic = false;
        this.noData = true;
      } else {
        this.hideWhenNoAcademic = true;
        this.noData = false;
      }
    })
  }

  // Method to delete student object
  deleteAcademic(academic) {
    if (window.confirm('Are sure you want to delete this student ?')) { // Asking from user before Deleting student data.
      this.crudApi.DeleteAcademic(academic.$key) // Using Delete student API to delete student.
      this.toastr.success(academic.firstName + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
    }
  }

}