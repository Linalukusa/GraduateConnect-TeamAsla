import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/culture-fit/Models/Answer';
import { CrudService } from 'src/app/shared/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cultures-list',
  templateUrl: './cultures-list.component.html',
  styleUrls: ['./cultures-list.component.css']
})
export class CulturesListComponent implements OnInit {

    p: number = 1;                      // Fix for AOT compilation error for NGX pagination
    Answer: Answer[];               // Save students data in Student's array.
    hideWhenNoCulture: boolean = false; // Hide students data table when no student.
    noData: boolean = false;            // Showing No Student Message, when no student in database.
    preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
    
  constructor(
    public crudApi: CrudService, // Inject student CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
    ){ }


  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GetCulturesList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Answer = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Answer.push(a as Answer);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {     
    this.crudApi.GetCulturesList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoCulture = false;
        this.noData = true;
      } else {
        this.hideWhenNoCulture = true;
        this.noData = false;
      }
    })
  }

  // Method to delete student object
  // deleteAcademic(academic) {
  //   if (window.confirm('Are sure you want to delete this student ?')) { // Asking from user before Deleting student data.
  //     this.crudApi.DeleteAcademic(academic.$key) // Using Delete student API to delete student.
  //     this.toastr.success(academic.firstName + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
  //   }
  }

