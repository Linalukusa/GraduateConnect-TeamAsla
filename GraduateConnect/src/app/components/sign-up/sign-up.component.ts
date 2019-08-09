import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';
import { MainContentService} from 'src/app/services/main-content.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
  public authService: AuthService,
  public router: Router
  ) { }
  ngOnInit() { }  

//   onSignUp(): void{
    
//     this.router.navigate(['culture-fit-root/questionB']);
// }
}
