import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'general',
      type: 'header'
    },
    {
      title: 'Home',
      icon: 'fa fa-tachometer-alt',
      active: true,
      },
    {
      title: 'General Information',
      icon: 'fa fa-tachometer-alt',
      active: true,
      },
      
      
    {
      title: 'Academic Information',
      icon: 'fa fa-tachometer-alt',
      active: true,
      
      },
    {
      title: 'Skills',
      icon: 'far fa-gem',
      active: true,
    },
    {
      title: 'Cultural Fit',
      icon: 'fa fa-chart-line',
      active: true,
    },
    
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}