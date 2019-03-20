import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { HomeRoutes } from './home.routing';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';

@NgModule({
  declarations: [HomeComponent, QuizSelectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
  ]
})
export class HomeModule { }
