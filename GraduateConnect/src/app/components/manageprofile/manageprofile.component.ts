import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SidebarService} from 'src/app/components/sidebar/sidebar.service';

@Component({
  selector: 'app-manageprofile',
  templateUrl: './manageprofile.component.html',
  styleUrls: ['./manageprofile.component.css']
})
export class ManageprofileComponent implements OnInit {
 
  

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
  

  constructor
  (public authService: AuthService,
  
    public sidebarservice: SidebarService) { }

  ngOnInit() {
  }
 
}
