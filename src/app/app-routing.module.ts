import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CoursesComponent} from "./courses/courses.component";
import {ProfileComponent} from "./profile/profile.component";
import {GraduationComponent} from "./graduation/graduation.component";
import {EnrollmentComponent} from "./enrollment/enrollment.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'graduation', component: GraduationComponent },
  { path: 'enrollment', component: EnrollmentComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
