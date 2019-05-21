import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentBComponent } from './main-contentB.component';

describe('MainContentBComponent', () => {
  let component: MainContentBComponent;
  let fixture: ComponentFixture<MainContentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
