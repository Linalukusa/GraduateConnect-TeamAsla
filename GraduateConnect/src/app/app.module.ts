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
import { MainContentComponent } from './culture-fit/components/main-content/main-content.component';
import { SidenavComponent } from './culture-fit/components/sidenav/sidenav.component';
import { ToolbarComponent } from './culture-fit/components/toolbar/toolbar.component';
import { MainContentBComponent } from './culture-fit/components/main-contentB/main-contentB.component';
import { MainContentCComponent } from './culture-fit/components/main-content-c/main-content-c.component';

import { HeroesComponent } from './culture-fit/components/heroes/heroes.component';
import { Hero } from './hero';
 


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
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    MainContentBComponent,
    MainContentCComponent,
    HeroesComponent,
    Hero,
    
    
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
    FlexLayoutModule
    
  ],
  providers: [ AuthService,
    {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }