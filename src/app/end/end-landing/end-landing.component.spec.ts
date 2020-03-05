import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndLandingComponent } from './end-landing.component';

describe('EndLandingComponent', () => {
  let component: EndLandingComponent;
  let fixture: ComponentFixture<EndLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
