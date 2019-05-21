import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentCComponent } from './main-content-c.component';

describe('MainContentCComponent', () => {
  let component: MainContentCComponent;
  let fixture: ComponentFixture<MainContentCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
