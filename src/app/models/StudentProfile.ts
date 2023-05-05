import {Course} from "./Course";

export class StudentProfile {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  graduationEligibility: boolean;
  courses: Course [];


  constructor(id: number, email: string, password: string, firstname: string, lastname: string, graduationEligibility: boolean, courses: Course[]) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.graduationEligibility = graduationEligibility;
    this.courses = courses;
  }
}
