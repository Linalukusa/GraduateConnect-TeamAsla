import { Injectable, NgZone } from '@angular/core';
import { User} from "../services/user";
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { switchMap, } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';
import { of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
}) 
export class AuthService {
  user$: Observable<User>;
  user: any;
  userData: any; // Save logged in user datavice) {}
  

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth:AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public jwtHelperService: JwtHelperService
    
  ) {    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    {
      this.user$ = this.afAuth.authState.
      pipe(switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
          } else {
            return of(null)
          }
        }))
   }
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
  collection()
  {
    this.afs.collection("users").get().toPromise()
    .then(snapshot => {
      console.log(snapshot.docs);
    })
  }
  userStatus()
  {
    
    this.afAuth.auth.onAuthStateChanged(user => {
      if(user)
        console.log("User Logged In!!!");
      
      else{
        console.log("User Logged Out");
      }
    })
  }
  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    // get token from local storage or state management
    const token = localStorage.getItem('token');

    // decode token to read the payload details
    const decodeToken = this.jwtHelperService.decodeToken(token);

    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(decodeToken['roles']);
  }
  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['register-student']);
          // if(email === "smlsip007@myuct.ac.za")
          // {
          //   this.router.navigate(['admin']);
          // }
          
          // if (this.afAuth.auth.currentUser.emailVerified)
          // {
          //   this.router.navigate(['register-student']);
          // }
          // else{
          //   alert("Please ensure your Email has been verified");
          // }
          
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  checkGeneralInfo()
  {
    this.user.isGIC = true;
    this.afAuth.auth.updateCurrentUser(this.user)
    console.log();
  }
  

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
        this.router.navigate(['register-student']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
 
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles:{
        student: true,
        admin: false,
      }
    }
    
    return userRef.set(userData, {
      merge: true
    }).then(user => {
      console.log('here',userRef);
      this.user = user;
      return user;
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }
  canRead(user: User): boolean {
    const allowed = ['admin', 'student']
    return this.checkAuthorization(user, allowed)
  }
  
  canWrite(user: User): boolean {
    const allowed = ['admin', 'student']
    return this.checkAuthorization(user, allowed)
  }
  canCreate(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }

  canUpdate(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }
  
  canDelete(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true
      }
    }
    return false
  }
}