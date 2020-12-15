import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: BehaviorSubject<Observable<firebase.User>> = new BehaviorSubject<Observable<firebase.User>>(null);
  user$ = this.user.asObservable().pipe(switchMap((user: Observable<firebase.User>) => user))
  
  constructor(
    private auth: AngularFireAuth
  ) {
    this.user.next(this.auth.authState)
   }

  loginGoogle(){
    this.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  logoutGoogle(){
    this.auth.signOut();
}
}
