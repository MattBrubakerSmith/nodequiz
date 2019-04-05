import { Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { PresentationComponent } from './presentation/presentation.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { CumulativeQuizResultsComponent } from './cumulative-quiz-results/cumulative-quiz-results.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'quizzes',
        component: QuizSelectionComponent
      },
      {
        path: 'quizzes/:slug',
        component: QuizComponent
      },
      {
        path: 'presentations/:slug',
        component: PresentationComponent
      },
      {
        path: 'quiz-results/:slug',
        component: QuizResultsComponent
      },
      {
        path: 'cumulative-results',
        component: CumulativeQuizResultsComponent
      }
    ]
  }
];
