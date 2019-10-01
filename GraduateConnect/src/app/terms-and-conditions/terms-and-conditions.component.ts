import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";
import { SidebarService} from 'src/app/components/sidebar/sidebar.service';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public sidebarservice: SidebarService,
    public dialogRef: MatDialogRef<TermsAndConditionsComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
      
  }

}
