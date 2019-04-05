import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeQuizResultsComponent } from './cumulative-quiz-results.component';

describe('CumulativeQuizResultsComponent', () => {
  let component: CumulativeQuizResultsComponent;
  let fixture: ComponentFixture<CumulativeQuizResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeQuizResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeQuizResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
