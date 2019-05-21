import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

// Import canActivate guard services
import { AuthGuard } from "../guard/auth.guard";
import { SecureInnerPagesGuard } from 'src/app/shared/guard/secure-inner-pages.guard.ts.guard';
import { CultureFitRootComponent } from 'src/app/culture-fit/culture-fit-root.component';
import { MainContentComponent } from 'src/app/culture-fit/components/main-content/main-content.component';
import { MainContentBComponent } from 'src/app/culture-fit/components/main-contentB/main-contentB.component';
import { MainContentCComponent } from 'src/app/culture-fit/components/main-content-c/main-content-c.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'culture-fit-root', component: CultureFitRootComponent, canActivate: [SecureInnerPagesGuard],
    children: [
      { path: '', component: MainContentComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'main-contentB', component: MainContentBComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'main-content-c', component: MainContentCComponent, canActivate: [SecureInnerPagesGuard]}
    ]},
  { path: '**', redirectTo: 'culture-fit-root'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }