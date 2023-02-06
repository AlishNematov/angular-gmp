import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/models/course.model';
import { DurationPipe } from '../pipes/duration.pipe';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  providers: [DurationPipe],
})
export class CourseItemComponent {
  @Input() public course!: Course;

  @Output() public deleteClicked: EventEmitter<number> = new EventEmitter();
  
  public editCourse(): void {}

  public deleteCourse(): void {
    this.deleteClicked.emit(this.course.id);
  }
}
