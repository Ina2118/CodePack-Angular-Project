import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent }
];
