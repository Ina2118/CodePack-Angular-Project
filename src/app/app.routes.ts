import { Routes } from '@angular/router';
import { Home } from './features/home/home/home';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { ProfileComponent } from './features/user/profile/profile';
import { authGuard } from './core/guards/auth-guard';
import { MainLayout } from './layouts/main-layout/main-layout';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'profile',component: ProfileComponent,canActivate: [authGuard],},
  {path: '', component: MainLayout,children: [{ path: 'home', component: Home }]},
];
