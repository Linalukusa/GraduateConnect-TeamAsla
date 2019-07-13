import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './adminSidenav.component.html',
  styleUrls: ['./adminSidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
  constructor() { }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
