import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]',
})
export class BorderStyleDirective implements OnInit {
  @Input('appBorderStyle') public creationDate!: Date;

  constructor(private element: ElementRef) { }

  public ngOnInit(): void {
    this.changeBorder();
  }

  private changeBorder(): void {
    if (this.creationDate) {
      const creationDate = this.creationDate.getTime();
      const currentDate = new Date().getTime();
      const msInWeek = 7 * 24 * 60 * 60 * 1000;
  
      if (creationDate < currentDate && creationDate >= (currentDate - msInWeek * 2)) {
        this.element.nativeElement.style.border = '1px solid green';
      } else if (creationDate > currentDate) {
        this.element.nativeElement.style.border = '1px solid blue';
      }
    }

  }
}
