import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAComponent } from './questionA.component';

describe('MainContentComponent', () => {
  let component: QuestionAComponent;
  let fixture: ComponentFixture<QuestionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});