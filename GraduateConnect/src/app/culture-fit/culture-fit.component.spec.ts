import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureFitComponent } from './culture-fit.component';

describe('CultureFitComponent', () => {
  let component: CultureFitComponent;
  let fixture: ComponentFixture<CultureFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});