import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 [appBorderStyle]="oldCourseDate">No border color</h2>
  <h2 [appBorderStyle]="freshCourseDate">Green border color</h2>
  <h2 [appBorderStyle]="upcomingCourse">Blue border color</h2>
  <h2>No border color</h2>`,
})
export class TestComponent {
  public readonly week = 7 * 24 * 60 * 60 * 1000;

  public currentDate = new Date();

  public oldCourseDate = new Date(this.currentDate.getTime() - this.week * 3);


  public freshCourseDate = new Date(this.currentDate.getTime() - this.week);

  public upcomingCourse = new Date(this.currentDate.getTime() + this.week);
}
