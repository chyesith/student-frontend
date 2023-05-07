import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Course} from "../models/Course";
import {StudentService} from "../services/student/student.service";
import {StudentProfile} from "../models/StudentProfile";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  registrationForm: FormGroup;
  hide = true;

  email: string = "";
  password: string = "";


  constructor(private studentService: StudentService , private router: Router) {
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.login(new StudentProfile(1, this.email, this.password,null, null, true, null))
      .subscribe((data) => {
        this.studentService.setStudentId(data.id);
        this.router.navigateByUrl('/courses');
        });
  }


}
