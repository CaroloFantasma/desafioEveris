import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './componentes/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent,

  },
  {
    path: 'home',
    component: HomeComponent,

  }
];

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    HomeComponent,
    ComentariosComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp (environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatSnackBarModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

