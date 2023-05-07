import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Course} from "../../models/Course";
import {StudentProfile} from "../../models/StudentProfile";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

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

  getCourses(): Observable<any> {
    return this.http.get<any>(this.baseUrl+"/api/v1/courses" , this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }


  getCoursesById(sid: number): Observable<any> {

    const options =
      { params: new HttpParams().set('sid', sid) };
    return this.http.get<any>(this.baseUrl+"/api/v1/courses/enrolled" , options)
      .pipe(retry(1), catchError(this.handleError));
  }


  enrollCourses(sid: number, cid: number): Observable<Course> {

    const  body  = { "courseId" : cid, "studentId" : sid}
    return this.http.post<Course>(this.baseUrl + "/api/v1/courses/enroll", JSON.stringify(body), this.httpOptions)
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
