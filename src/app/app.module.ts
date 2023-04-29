import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { RegistrationComponent } from './registration/registration.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { CoursesComponent } from './courses/courses.component';
import {MatTableModule} from "@angular/material/table";
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ProfileComponent } from './profile/profile.component';
import { GraduationComponent } from './graduation/graduation.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegistrationComponent,
    CoursesComponent,
    EnrollmentComponent,
    ProfileComponent,
    GraduationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
