import { Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';

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
      }
    ]
  }
];
