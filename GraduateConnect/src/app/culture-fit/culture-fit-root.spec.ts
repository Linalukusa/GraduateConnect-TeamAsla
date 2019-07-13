import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureFitRootComponent } from './culture-fit-root.component';

describe('CultureFitRootComponent', () => {
  let component: CultureFitRootComponent;
  let fixture: ComponentFixture<CultureFitRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureFitRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureFitRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
