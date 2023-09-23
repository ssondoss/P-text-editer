import { TestBed } from '@angular/core/testing';

import { SpecialCharactersPickerService } from './special-characters-picker.service';

describe('SpecialCharactersPickerService', () => {
  let service: SpecialCharactersPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialCharactersPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
