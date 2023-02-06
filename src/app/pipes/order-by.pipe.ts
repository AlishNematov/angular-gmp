import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/models/course.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], order: 'asc' | 'desc' = 'asc'): Course[] {
    return courses.sort((a, b) => {
      if (order === 'asc') {
        return +a.creationDate - +b.creationDate;
      } else {
        return +b.creationDate - +a.creationDate;
      }
    });
  }

}
