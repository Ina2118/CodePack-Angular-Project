import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  rememberMe: boolean = false;

  login() {
    this.errorMessage = '';

    this.auth
      .login(this.email, this.password, this.rememberMe)
      .then(() => {
        this.router.navigate(['/profile']);
      })
      .catch((error) => {
        const code = error?.code;

        if (code === 'auth/wrong-password') {
          this.errorMessage = 'Wrong Password';
        } else if (code === 'auth/user-not-found') {
          this.errorMessage = 'User not found';
        } else if (code === 'auth/invalid-email') {
          this.errorMessage = 'Invalid email';
        } else {
          this.errorMessage = 'Error occurred during login. Please try again.';
        }
      });
  }
}
