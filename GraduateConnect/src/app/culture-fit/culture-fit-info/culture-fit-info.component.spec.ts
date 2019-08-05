import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureFitInfoComponent } from './culture-fit-info.component';

describe('CultureFitInfoComponent', () => {
  let component: CultureFitInfoComponent;
  let fixture: ComponentFixture<CultureFitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureFitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureFitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
