import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFormControlComponent } from './invalid-form-control.component';

describe('InvalidFormControlComponent', () => {
  let component: InvalidFormControlComponent;
  let fixture: ComponentFixture<InvalidFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
