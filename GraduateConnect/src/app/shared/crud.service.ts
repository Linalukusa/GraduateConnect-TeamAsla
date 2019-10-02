import { Injectable } from '@angular/core';
import { Student } from '../shared/student';
 // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { stringify } from '@angular/core/src/util';
import { Academic } from '../shared/academic';
import { Answer } from '../culture-fit/Models/Answer';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  academicsRef:AngularFireList<any>;
  academicRef:AngularFireObject<any>;
  cultureRef: AngularFireObject<any>;
  culturesRef: AngularFireList<any>;
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Student
  BasicInformation(student: Student) {
    this.studentsRef.push({
      gender: student.gender,
      title: student.title,
      ethnicity: student.ethnicity,
      firstName: student.firstName,
      // lastName: student.lastName,
      // PreferredName: student.PreferredName,
      dob: student.dob,
      citizenship: student.citizenship,
      currentcity: student.currentcity,
      email: student.email,
      mobileNumber: student.mobileNumber,
      passport: student.passport,
      currentprovince: student.currentprovince,
      generalInfoComplete: student.generalInfoComplete
    })
  }
  AddCulture(answer: Answer) {
    this.culturesRef.push({
      dominant: answer.Dominance,
      precise: answer.Precise,
      earth: answer.Earth,
      animated: answer.Animated,
      convincing: answer.Convincing,
      accomodate: answer.Accommodate,
      introvert: answer.Introvert,
      headstrong: answer.Headstrong,
     

     
    })
  }
  //Create Academic
  AcademicResults(academic: Academic){
    this.academicsRef.push({ 
    year: academic.year,
    institution:academic.institution,
    qualification: academic.qualification,
    specialisation: academic.specialisation,
    program:academic.program,
    course:academic.course,
    coursecode: academic.coursecode,
    nqfcredit: academic.nqfcredit,
    result: academic.result,
    language:academic.language,
    levelofspeaking: academic.levelofspeaking,
    skill:academic.skill,
    levelofknowledge: academic.levelofknowledge,
    })
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }
  GetCulture(id: string) {
    this.cultureRef = this.db.object('cultures-list/' + id);
    return this.cultureRef;
  }
//Fetch Single Academic OBject
  GetAcademic(id: string){
  this.academicRef=this.db.object('academic-list/' + id);
  return this.academicRef;
  }
  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }  
  GetCulturesList() {
    this.culturesRef = this.db.list('cultures-list');
    return this.culturesRef;
  }  
  //Fetch Academic List
  GetAcademicList(){
    this.academicsRef=this.db.list('academic=-list/');
    return this.academicsRef;
    }

  // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      gender: student.gender,
      title: student.title,
      ethnicity: student.ethnicity,
      firstName: student.firstName,
      // lastName: student.lastName,
      // PreferredName: student.PreferredName,
      dob: student.dob,
      citizenship: student.citizenship,
      currentcity: student.currentcity,
      email: student.email,
      mobileNumber: student.mobileNumber,
      passport: student.passport,
      currentprovince: student.currentprovince,
      generalInfoComplete: student.generalInfoComplete,
      AcademicResultsComplete: student.AcademicResultsComplete,
      cultureTestComplete: student.cultureTestComplete

    })
  }  
  //update Academic Object
  UpdateAcademic(academic:Academic){
    this.academicRef.update({
      year: academic.year,
    institution:academic.institution,
    qualification: academic.qualification,
    specialisation: academic.specialisation,
    program:academic.program,
    course:academic.course,
    coursecode: academic.coursecode,
    nqfcredit: academic.nqfcredit,
    result: academic.result,
    language:academic.language,
    levelofspeaking: academic.levelofspeaking,
    skill:academic.skill,
    levelofknowledge: academic.levelofknowledge,

    })
  }

  getTotalArray(id:string) {
    const obj = this.db.list('academic=-list/');

    let totalArray;
    obj.valueChanges().subscribe((val) => {
      totalArray = val['results'];
    })

    return totalArray;
  }

  // Delete Student Object
  DeleteStudent(id: string) { 
    this.studentRef = this.db.object('students-list/'+id);
    this.studentRef.remove();
  }
  //Delete Academic Object
  DeleteAcademic(id: string) { 
    this.academicRef= this.db.object('academic-list/'+id);
    this.academicRef.remove();
  }
}