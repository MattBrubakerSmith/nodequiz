import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeComponent } from './home.component';

import { HomeRoutes } from './home.routing';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';

@NgModule({
  declarations: [HomeComponent, QuizSelectionComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(HomeRoutes),
  ]
})
export class HomeModule { }
