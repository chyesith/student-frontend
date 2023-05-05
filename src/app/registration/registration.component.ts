import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../services/student/student.service";
import {StudentProfile} from "../models/StudentProfile";
import {Course} from "../models/Course";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  hide = true;

  firstName: string = "";
  lastName: string = "";
  email: string = "";

  password: string = "";
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  course : Course[]

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
  }

  submit() {

    this.studentService.createProfile(new StudentProfile(1, this.email, this.password, this.firstName, this.lastName, true, this.course))
      .subscribe({next: () => {console.log(this)} , error: () =>{ console.log(this)}});
  }


}
