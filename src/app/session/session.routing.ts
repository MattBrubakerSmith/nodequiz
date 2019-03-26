// Angular imports
import { Routes } from '@angular/router';

// Session component imports
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

export const SessionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      }
    ]
  }
];
