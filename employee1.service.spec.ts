import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee1.service';

describe('Employee1Service', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
