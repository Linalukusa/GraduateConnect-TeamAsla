import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDComponent } from './questionD.component';

describe('QuestionDComponent', () => {
  let component: QuestionDComponent;
  let fixture: ComponentFixture<QuestionDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
