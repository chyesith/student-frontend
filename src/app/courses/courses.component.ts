import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CourseService} from "../services/course/course.service";
import {StudentProfile} from "../models/StudentProfile";
import {StudentService} from "../services/student/student.service";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['courseName', 'description', 'courseFee', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private courseService: CourseService, private studentService: StudentService) {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      console.log(data);
      this.dataSource.data = data;
    })
  };

  enrollCourse(cid: number,) {
    const sid = this.studentService.getId();
    this.courseService.enrollCourses(cid, sid)
  }
}

