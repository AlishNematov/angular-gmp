import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SearchComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message with value if search method called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.search('test');
    expect(consoleSpy).toHaveBeenCalledWith('test');
  });

  it('should call search method if Search button clicked', () => {
    const onSearchButtonClickSpy = spyOn(component, 'search');
    const loadMoreButton = fixture.debugElement.query(By.css('button.search__button'));
    loadMoreButton.nativeElement.click();

    expect(onSearchButtonClickSpy).toHaveBeenCalled();
  });
});
