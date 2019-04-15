import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComponent } from './presentation.component';
import { MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, MatRadioModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from '../home.routing';
import { HomeComponent } from '../home.component';
import { QuizSelectionComponent } from '../quiz-selection/quiz-selection.component';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizResultsComponent } from '../quiz-results/quiz-results.component';
import { CumulativeQuizResultsComponent } from '../cumulative-quiz-results/cumulative-quiz-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PresentationComponent,
        HomeComponent,
        QuizSelectionComponent,
        QuizComponent,
        QuizResultsComponent,
        CumulativeQuizResultsComponent
      ],
      imports: [
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatProgressBarModule,
        MatRadioModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(HomeRoutes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
