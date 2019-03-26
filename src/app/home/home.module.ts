import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeComponent } from './home.component';

import { HomeRoutes } from './home.routing';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [HomeComponent, QuizSelectionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(HomeRoutes),
  ],
  providers: [
    QuizService
  ]
})
export class HomeModule { }
