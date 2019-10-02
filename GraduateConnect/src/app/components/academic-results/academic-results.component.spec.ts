import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AcademicResultsComponent } from './academic-results.component';



describe('AcademicResultsComponent', () => {
  let component: AcademicResultsComponent;
  let fixture: ComponentFixture<AcademicResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




