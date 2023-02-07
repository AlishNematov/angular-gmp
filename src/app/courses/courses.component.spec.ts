import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CoursesComponent, FilterPipe, OrderByPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message if loadMore method called', () => {
    const consoleSpy = spyOn(console, 'log');
    const clickEvent = new Event('click');
    component.loadMore(clickEvent);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message if deleteCourse method called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.deleteCourse(1);
    expect(consoleSpy).toHaveBeenCalledWith(1);
  });

  it('should prevent default actions if loadMore method called', () => {
    const clickEvent = new Event('click');
    const preventDefaultSpy = spyOn(clickEvent, 'preventDefault');
    component.loadMore(clickEvent);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
