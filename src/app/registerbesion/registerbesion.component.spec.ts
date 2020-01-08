import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbesionComponent } from './registerbesion.component';

describe('RegisterbesionComponent', () => {
  let component: RegisterbesionComponent;
  let fixture: ComponentFixture<RegisterbesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
