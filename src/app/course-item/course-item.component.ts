import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() public course!: Course;

  @Output() public deleteClicked: EventEmitter<number> = new EventEmitter();

  public transformMinutes(minutesValue: number): string {
    const minutesInHour = 60;
    const hours = Math.floor(minutesValue / minutesInHour);
    const minutes = Math.floor(minutesValue % minutesInHour);
    return `${hours}h ${minutes} min`;
  }

  public onEditButtonClick(): void {return;}

  public onDeleteButtonClick(): void {
    this.deleteClicked.emit(this.course.id);
  }
}
