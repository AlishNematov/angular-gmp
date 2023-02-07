import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BorderStyleDirective } from './border-style.directive';
import { TestComponent } from '../test-component/test-component.component';

describe('BorderStyleDirective', () => {
  let des: DebugElement[];
  let bareH2: DebugElement;
  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [ BorderStyleDirective, TestComponent ],
    })
      .createComponent(TestComponent);
  
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.directive(BorderStyleDirective));
    bareH2 = fixture.debugElement.query(By.css('h2:not([appBorderStyle])'));
  });
  
  it('should have three elements', () => {
    expect(des.length).toBe(3);
  });

  it('should 1st <h2> border empty', () => {
    const border = des[0].nativeElement.style.border;
    expect(border).toBe('');
  });

  it('should 2nd <h2> border color green', () => {
    const border = des[1].nativeElement.style.border;
    expect(border).toBe('1px solid green');
  });

  it('should color 3rd <h2> border color blue', () => {
    const border = des[2].nativeElement.style.border;
    expect(border).toBe('1px solid blue');
  });
  
  it('bare <h2> should not have a customProperty', () => {
    expect(bareH2.properties['customProperty']).toBeUndefined();
  });
});
