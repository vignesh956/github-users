import { TestBed } from '@angular/core/testing';

import { UserinformationService } from './userinformation.service';

describe('UserinformationService', () => {
  let service: UserinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
