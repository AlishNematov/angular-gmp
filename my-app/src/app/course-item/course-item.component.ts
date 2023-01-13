import { Component, Input } from '@angular/core';
import { Course } from 'src/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() public course!: Course;
}
