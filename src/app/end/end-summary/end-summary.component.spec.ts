import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSummaryComponent } from './end-summary.component';

describe('EndSummaryComponent', () => {
  let component: EndSummaryComponent;
  let fixture: ComponentFixture<EndSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
