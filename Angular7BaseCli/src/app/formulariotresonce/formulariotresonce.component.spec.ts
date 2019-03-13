import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariotresonceComponent } from './formulariotresonce.component';

describe('FormulariotresonceComponent', () => {
  let component: FormulariotresonceComponent;
  let fixture: ComponentFixture<FormulariotresonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariotresonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariotresonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
