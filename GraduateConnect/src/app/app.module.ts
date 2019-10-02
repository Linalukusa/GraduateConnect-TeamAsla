import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/LogoutComponent';
import { WelcomeModalComponent } from './components/welcome-modal/welcome-modal.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


// Auth service
import { AuthService } from "./shared/services/auth.service";

// Sidebar component
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap';
// Toaster for Alert Messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { GeneralInformationComponent } from './components/general-information/general-information.component';
// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { StudentsListComponent } from './students-list/students-list.component';

import { CultureFitRootComponent } from './culture-fit/culture-fit-root.component';
import { QuestionAComponent } from './culture-fit/components/questionA/questionA.component';
// import { SidenavComponent } from './culture-fit/components/sidenav/sidenav.component';
// import { ToolbarComponent } from './culture-fit/components/toolbar/toolbar.component';
import { QuestionBComponent } from './culture-fit/components/questionB/questionB.component';
import { QuestionCComponent } from './culture-fit/components/questionC/questionC.component';
import { QuestionDComponent } from './culture-fit/components/questionD/questionD.component';
import { QuestionEComponent } from './culture-fit/components/questionE/questionE.component';

import { AdminComponent } from './components/admin/admin.component';
import { AdminSidenavComponent } from './components/admin/adminSidenav/adminSidenav.component';
import { AdminToolbarComponent } from './components/admin/adminToolbar/adminToolbar.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { AcademicResultsComponent } from './components/academic-results/academic-results.component';
import { ManageprofileComponent } from './components/manageprofile/manageprofile.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatButtonModule, MatCheckboxModule, MatDialog , MatDialogModule} from '@angular/material';
import { GradSummaryComponent } from './grad-summary/grad-summary.component';
import { ChartsModule } from 'ng2-charts';
import { EditStudentComponent } from './edit-student/edit-student.component';
// import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
// import { LangDialogComponent } from './lang-dialog/lang-dialog.component';
// import { QualDialogComponent } from './qual-dialog/qual-dialog.component';
import { JwtModule } from "@auth0/angular-jwt";
import { CultureFitInfoComponent } from './culture-fit/culture-fit-info/culture-fit-info.component';
import { Hero } from './hero';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CulturesListComponent } from './components/cultures-list/cultures-list.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AdminComponent,
    TermsAndConditionsComponent,
    LogoutComponent,
    WelcomeModalComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SidebarComponent,
    // GeneralInformationComponent,
    BasicInformationComponent,
    StudentsListComponent,
    EditStudentComponent,
    CultureFitRootComponent,
    QuestionAComponent,
    // SidenavComponent,
    // ToolbarComponent,
    QuestionBComponent,
    QuestionCComponent,
    Hero,
    QuestionDComponent,
    TechSkillsComponent,
    QuestionEComponent,
    AdminComponent,
    AdminSidenavComponent,
    AdminToolbarComponent,
    AcademicResultsComponent,
    ManageprofileComponent,
    DropzoneDirective,
    UploadTaskComponent,
    GradSummaryComponent,
    //ConfirmEqualValidatorDirective,
    GradSummaryComponent,
    // LangDialogComponent,
    // QualDialogComponent,
    CultureFitInfoComponent,
    CulturesListComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,  // Firebase database module 
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    DragDropModule,
    MaterialModule,
    FlexLayoutModule,
    JwtModule.forRoot({}),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientJsonpModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    ChartsModule,
    MatDialogModule,
    BrowserAnimationsModule,    // Required animations module for Toastr
    ToastrModule.forRoot({      // Register NgxToast NPM module
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,      
    }),
    NgxPaginationModule,  // NGX pagination module
   
  ],

  entryComponents: [
   QuestionAComponent, QuestionCComponent, WelcomeModalComponent ],
    

  providers: [ AuthService,
    {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent],
  // entryComponents:[QuestionAComponent, QuestionBComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);