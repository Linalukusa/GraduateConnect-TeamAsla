import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";
// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';
// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// Auth service
import { AuthService } from "./shared/services/auth.service";
// Sidebar component
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap';
//Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CultureFitRootComponent } from './culture-fit/culture-fit-root.component';
import {FormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionAComponent } from './culture-fit/components/questionA/questionA.component';
import { SidenavComponent } from './culture-fit/components/sidenav/sidenav.component';
import { ToolbarComponent } from './culture-fit/components/toolbar/toolbar.component';
import { QuestionBComponent } from './culture-fit/components/questionB/questionB.component';
import { QuestionCComponent } from './culture-fit/components/questionC/questionC.component';

import { HeroesComponent } from './culture-fit/components/heroes/heroes.component';
import { Hero } from './hero';
 
import { ChartsModule } from 'ng2-charts';
import { RadarComponent } from './radar/radar.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentsListComponent } from './students-list/students-list.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SidebarComponent,
    CultureFitRootComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    QuestionAComponent,
    SidenavComponent,
    ToolbarComponent,
    QuestionBComponent,
    QuestionCComponent,
    HeroesComponent,
    Hero,
    RadarComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule 
    
  ],
  providers: [ AuthService,
    {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }