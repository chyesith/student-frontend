import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {StudentProfile} from "../../models/StudentProfile";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'X-Requested-With': 'XMLHttpRequest'

    }),
  };
  //url for student srevice
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  login(userData: StudentProfile): Observable<StudentProfile> {
    return this.http.post<StudentProfile>(this.baseUrl + "/login", JSON.stringify(userData), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }


  createProfile(student: StudentProfile): Observable<StudentProfile> {
    return this.http.post<StudentProfile>(this.baseUrl + "/api/v1/student/create", JSON.stringify(student), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
