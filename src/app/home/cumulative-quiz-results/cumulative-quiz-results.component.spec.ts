import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatDividerModule } from '@angular/material';

import { CumulativeQuizResultsComponent } from './cumulative-quiz-results.component';
import { QuizService } from '../quiz.service';
import { HttpClientModule } from '@angular/common/http';

describe('CumulativeQuizResultsComponent', () => {
  let component: CumulativeQuizResultsComponent;
  let fixture: ComponentFixture<CumulativeQuizResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeQuizResultsComponent ],
      imports: [
        MatCardModule,
        MatDividerModule,
        HttpClientModule
      ],
      providers: [
        QuizService
      ]
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
