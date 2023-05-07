import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CourseService} from "../services/course/course.service";
import {StudentService} from "../services/student/student.service";




@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit{
  displayedColumns: string[] = ['courseName', 'description' ];
  dataSource = new MatTableDataSource();

  constructor(private courseService: CourseService , private  studentService: StudentService) {

  }

  ngOnInit(): void
  ngOnInit(): void {
    const sid = this.studentService.getId();
    this.courseService.getCoursesById(sid).subscribe((data) => {
      console.log(data);
      this.dataSource.data = data;
    })
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
