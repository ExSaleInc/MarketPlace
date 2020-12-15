import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marketplace';
  user$: any;
  user: any;
  constructor(private auth: AuthService){  }

  ngOnInit(){
    this.user$ = this.auth.user$;
    this.user = this.auth.user;
  }
}
