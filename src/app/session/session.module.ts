import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

import { SessionRoutes } from './session.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [NotFoundComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
  ]
})
export class SessionModule { }
