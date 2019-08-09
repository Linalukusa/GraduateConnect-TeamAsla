import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualDialogComponent } from './qual-dialog.component';

describe('QualDialogComponent', () => {
  let component: QualDialogComponent;
  let fixture: ComponentFixture<QualDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
