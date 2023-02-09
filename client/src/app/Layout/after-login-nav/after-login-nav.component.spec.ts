import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginNavComponent } from './after-login-nav.component';

describe('AfterLoginNavComponent', () => {
  let component: AfterLoginNavComponent;
  let fixture: ComponentFixture<AfterLoginNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
