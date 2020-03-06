import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndDetailComponent } from './end-detail.component';

describe('EndDetailComponent', () => {
  let component: EndDetailComponent;
  let fixture: ComponentFixture<EndDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
