import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { WelcomeModalComponent } from '../../components/welcome-modal/welcome-modal.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
// import { GeneralInformationComponent } from '../../components/general-information/general-information.component';

// Import canActivate guard services
import { AuthGuard } from "../guard/auth.guard";
import {SecureInnerPagesGuard} from 'src/app/shared/guard/secure-inner-pages.guard.ts.guard';
import { BasicInformationComponent } from 'src/app/basic-information/basic-information.component';
import { StudentsListComponent } from 'src/app/students-list/students-list.component';
import { LogoutComponent } from 'src/app/components/LogoutComponent';

//Culture-fit
import { CultureFitRootComponent } from 'src/app/culture-fit/culture-fit-root.component';
import { QuestionAComponent } from 'src/app/culture-fit/components/questionA/questionA.component';
import { QuestionBComponent } from 'src/app/culture-fit/components/questionB/questionB.component';
//import { QuestionCComponent } from 'src/app/culture-fit/components/questionC/questionC.component';
import { QuestionDComponent } from 'src/app/culture-fit/components/questionD/questionD.component';
import { QuestionEComponent } from 'src/app/culture-fit/components/questionE/questionE.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { EditStudentComponent } from 'src/app/edit-student/edit-student.component';
import { AcademicResultsComponent } from 'src/app/components/academic-results/academic-results.component';
import { ManageprofileComponent } from 'src/app/components/manageprofile/manageprofile.component';
import { GradSummaryComponent } from 'src/app/grad-summary/grad-summary.component';
import { getCanActivateChild } from '@angular/router/src/utils/preactivation';
import { CultureFitInfoComponent } from 'src/app/culture-fit/culture-fit-info/culture-fit-info.component';
import { QuestionCComponent } from 'src/app/culture-fit/components/questionC/questionC.component';
import { TechSkillsComponent } from 'src/app/tech-skills/tech-skills.component';
import { TermsAndConditionsComponent } from 'src/app/terms-and-conditions/terms-and-conditions.component';


// Include route guard in routes array
const routes: Routes = [
  
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'welcome-modal', component: WelcomeModalComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  // { path: 'general-information ', component: GeneralInformationComponent},
  { path: 'academic-results', component: AcademicResultsComponent},
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'register-student', component: BasicInformationComponent },
  {path: 'technical-skills', component: TechSkillsComponent},
  { path: 'radar', component: GradSummaryComponent},
  { path: 'view-students', component: StudentsListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'manageprofile', component: ManageprofileComponent},
  { path: 'culture-fit-info', component: CultureFitInfoComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: 'culture-fit-root', component: CultureFitRootComponent, canActivate: [SecureInnerPagesGuard],
    children: [
      { path: '', redirectTo: 'questionA', pathMatch: 'full'},
      { path: 'questionA', component: QuestionAComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'questionB', component: QuestionBComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'questionC', component: QuestionCComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'questionD', component: QuestionDComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'questionE', component: QuestionEComponent, canActivate: [SecureInnerPagesGuard]},
      
    ]},
  
]
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
