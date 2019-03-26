import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatDividerModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeComponent } from './home.component';

import { HomeRoutes } from './home.routing';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizService } from './quiz.service';
import { PresentationComponent } from './presentation/presentation.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [HomeComponent, QuizSelectionComponent, PresentationComponent, QuizComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FlexLayoutModule,
    RouterModule.forChild(HomeRoutes),
  ],
  providers: [
    QuizService
  ]
})
export class HomeModule { }
