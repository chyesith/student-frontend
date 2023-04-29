import {Component} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  title: string;
  description: string;
  fee: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {title: "SAMPLE COURSE", description: 'Hydrogen', fee: 1.0079,},
  {title: "SAMPLE COURSE", description: 'Helium', fee: 4.0026, },
  {title: "SAMPLE COURSE", description: 'Lithium', fee: 6.941,},
  {title: "SAMPLE COURSE", description: 'Beryllium', fee: 9.0122, },
  {title: "SAMPLE COURSE", description: 'Boron', fee: 10.811, },
  {title: "SAMPLE COURSE", description: 'Carbon', fee: 12.0107, },
  {title: "SAMPLE COURSE", description: 'Nitrogen', fee: 14.0067, },
  {title: "SAMPLE COURSE", description: 'Oxygen', fee: 15.9994, },
  {title: "SAMPLE COURSE", description: 'Fluorine', fee: 18.9984, },
  {title: "SAMPLE COURSE", description: 'Neon', fee: 20.1797, },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent  {
  displayedColumns: string[] = ['title', 'description', 'fee' , 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

