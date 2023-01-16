import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: 'Test course title',
      creationDate: new Date(),
      duration: 97,
      description: 'Test description text',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onEditButtonClick if edit button clicked', () => {
    const onEditButtonClickSpy = spyOn(component, 'onEditButtonClick');
    const editButton = fixture.debugElement.query(By.css('button.buttons__button_edit'));
    editButton.nativeElement.click();

    expect(onEditButtonClickSpy).toHaveBeenCalled();
  });

  it('should call onDeleteButtonClick if edit button clicked', () => {
    const onDeleteButtonClickSpy = spyOn(component, 'onDeleteButtonClick');
    const deleteButton = fixture.debugElement.query(By.css('button.buttons__button_delete'));
    deleteButton.nativeElement.click();

    expect(onDeleteButtonClickSpy).toHaveBeenCalled();
  });

  it('should emit event if delete button clicked', () => {
    const eventSpy = spyOn(component.deleteClicked, 'emit');
    const deleteButton = fixture.debugElement.query(By.css('button.buttons__button_delete'));
    deleteButton.nativeElement.click();

    expect(eventSpy).toHaveBeenCalledWith(1);
  });


  it('should return string of duration if method transformMinutes called', () => {
    const inputValue = 99;
    const expectingValue = '1h 39 min';
    const test = component.transformMinutes(inputValue);
    expect(test).toEqual(expectingValue);
  });
});
