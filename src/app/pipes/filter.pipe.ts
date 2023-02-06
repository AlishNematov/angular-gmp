import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/models/course.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], value: string): Course[] {
    if (value) {
      return courses.filter((course) => course.title.includes(value));
    }
    return courses;
  }
}
