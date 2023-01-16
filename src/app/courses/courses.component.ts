import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [];

  public searchValue = '';

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        creationDate: new Date(),
        duration: 73,
        description: "1Learn about where you can find course descriptions, what information they include, how they work and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      },
      {
        id: 2,
        title: 'Video Course 2. Name tag',
        creationDate: new Date(),
        duration: 88,
        description: "2Learn about where you can find course descriptions, what information they include, how they work and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      },
      {
        id: 3,
        title: 'Video Course 3. Name tag',
        creationDate: new Date(),
        duration: 29,
        description: "3Learn about where you can find course descriptions, what information they include, how they work and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      },
    ];
  }

  public onSearchButtonClick(searchValue: string): void {
    console.log(searchValue);
  }

  public trackByFn(_: number, item: Course) {
    return item.id;
  }

  public onLoadMoreBtnClick(event: Event): void {
    event.preventDefault();
    console.log('Load More');
  }

  public onDeleteClick(id: number) {
    console.log(id);
  }
}
