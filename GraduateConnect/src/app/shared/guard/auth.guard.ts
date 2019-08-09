import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const allowedRoles = next.data.allowedRoles;
      const isAuthorized = this.authService.isAuthorized(allowedRoles);
      if (!isAuthorized) {
      // if not authorized, show access denied message
      this.router.navigate(['/accessdenied']);
      }
      return isAuthorized;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      const allowedRoles = next.data.allowedRoles;
      
    const isAuthorized = this.authService.isAuthorized(allowedRoles);
    if (!isAuthorized) {
      // if not authorized, show access denied message
      this.router.navigate(['/accessdenied']);
    }
    return isAuthorized;
    }
  
}