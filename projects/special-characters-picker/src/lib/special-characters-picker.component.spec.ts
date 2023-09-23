import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCharactersPickerComponent } from './special-characters-picker.component';

describe('SpecialCharactersPickerComponent', () => {
  let component: SpecialCharactersPickerComponent;
  let fixture: ComponentFixture<SpecialCharactersPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialCharactersPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialCharactersPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
