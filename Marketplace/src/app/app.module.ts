import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { ExibicaoProdutosComponent } from './exibicao-produtos/exibicao-produtos.component'
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CadastroProdutosComponent,
    ExibicaoProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFireStorageModule
  ],
  providers: [
    { provide: BUCKET, useValue: "gs://marketplace-19934.appspot.com" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
