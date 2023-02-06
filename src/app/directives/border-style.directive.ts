import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Course } from 'src/models/course.model';

@Directive({
  selector: '[appBorderStyle]',
})
export class BorderStyleDirective implements OnInit {
  @Input('appBorderStyle') public course!: Course;

  constructor(private element: ElementRef) { }

  public ngOnInit(): void {
    this.changeBorder();
  }

  private changeBorder(): void {
    const creationDate = this.course.creationDate.getTime();
    const currentDate = new Date().getTime();
    const msInWeek = 7 * 24 * 60 * 60 * 1000;

    if (creationDate < currentDate && creationDate >= (currentDate - msInWeek * 2)) {
      this.element.nativeElement.style.border = '1px solid green';
    } else if (creationDate > currentDate) {
      this.element.nativeElement.style.border = '1px solid blue';
    }
  }
}
