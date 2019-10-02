import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { SidebarService} from 'src/app/components/sidebar/sidebar.service';
import { MatDialogRef, MatDialog } from '@angular/material';



@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css']
})
export class WelcomeModalComponent  {
  

  constructor
  (public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public sidebarservice: SidebarService,
    public dialogRef: MatDialogRef<WelcomeModalComponent>,
    public dialog: MatDialog
   ) { }

    ngOnInit() {
    }

  onCultureFitButton(): void{
  this.closeDialogs();
  } 
  closeDialogs()
  {
    this.dialogRef.close();
  }

 

  tester()
  {
    alert("This is called");
    this.dialogRef.close();
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
  
}