import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';
import { MainContentService} from 'src/app/services/main-content.service';
import { WelcomeModalComponent } from '../welcome-modal/welcome-modal.component';
import { MatDialog } from '@angular/material';
import { TermsAndConditionsComponent } from 'src/app/terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
  public authService: AuthService,
  public router: Router,
  public dialog: MatDialog
  ) { }
  ngOnInit() { }  

  onTerms(){
    this.dialog.open(TermsAndConditionsComponent, {
    
      height: '520px',
     width: '75%',
    })
  }
//   onSignUp(): void{
    
//     this.router.navigate(['culture-fit-root/questionB']);
// }
}
