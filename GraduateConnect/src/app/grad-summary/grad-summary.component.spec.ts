import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradSummaryComponent } from './grad-summary.component';

describe('GradSummaryComponent', () => {
  let component: GradSummaryComponent;
  let fixture: ComponentFixture<GradSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
