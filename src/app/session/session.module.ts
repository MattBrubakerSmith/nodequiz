import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatDividerModule } from '@angular/material';
import { StorageServiceModule } from "ngx-webstorage-service";

import { NotFoundComponent } from './not-found/not-found.component';

import { SessionRoutes } from './session.routing';
import { LoginComponent } from './login/login.component';
import { UserService } from "./user.service";

@NgModule({
  declarations: [NotFoundComponent, LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    RouterModule.forChild(SessionRoutes),
  ],
  providers: [
    UserService
  ]
})
export class SessionModule { }
