import { Component, Input } from '@angular/core';
import { Course } from 'src/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() public course!: Course;

  public transformMinutes(minutesValue: number): string {
    const minutesInHour = 60;
    const hours = Math.floor(minutesValue / minutesInHour);
    const minutes = Math.floor(minutesValue % minutesInHour);
    return `${hours}h ${minutes} min`
  }
}
