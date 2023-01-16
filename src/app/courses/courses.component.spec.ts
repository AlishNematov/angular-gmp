import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CoursesComponent ],
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

  it('should log message with value if onSearchButtonClick method called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.onSearchButtonClick('test');
    expect(consoleSpy).toHaveBeenCalledWith('test');
  });

  it('should call onSearchButtonClick if Search button clicked', () => {
    const onSearchButtonClickSpy = spyOn(component, 'onSearchButtonClick');
    const loadMoreButton = fixture.debugElement.query(By.css('button.search__button'));
    loadMoreButton.nativeElement.click();

    expect(onSearchButtonClickSpy).toHaveBeenCalled();
  });

  it('should log message if onLoadMoreBtnClick method called', () => {
    const consoleSpy = spyOn(console, 'log');
    const clickEvent = new Event('click');
    component.onLoadMoreBtnClick(clickEvent);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message if onDeleteClick method called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.onDeleteClick(1);
    expect(consoleSpy).toHaveBeenCalledWith(1);
  });

  it('should prevent default actions if onLoadMoreBtnClick method called', () => {
    const clickEvent = new Event('click');
    const preventDefaultSpy = spyOn(clickEvent, 'preventDefault');
    component.onLoadMoreBtnClick(clickEvent);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should call onLoadMoreBtnClick if Load More button clicked', () => {
    const onLoadMoreBtnClickSpy = spyOn(component, 'onLoadMoreBtnClick');
    const loadMoreButton = fixture.debugElement.query(By.css('button.courses__more-button'));
    loadMoreButton.nativeElement.click();

    expect(onLoadMoreBtnClickSpy).toHaveBeenCalled();
  });


});
