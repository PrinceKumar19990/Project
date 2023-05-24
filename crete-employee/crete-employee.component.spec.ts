import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteEmployeeComponent } from './crete-employee.component';

describe('CreteEmployeeComponent', () => {
  let component: CreteEmployeeComponent;
  let fixture: ComponentFixture<CreteEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreteEmployeeComponent]
    });
    fixture = TestBed.createComponent(CreteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
