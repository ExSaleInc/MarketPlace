import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public user$: Observable<firebase.User> = this.auth.user$

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginGoogle()
  }

  logout(){
    this.auth.logoutGoogle()
  }

//   loginGoogle(){
//     this.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
//   }

//   logoutGoogle(){
//     this.auth.signOut();
// }
}
