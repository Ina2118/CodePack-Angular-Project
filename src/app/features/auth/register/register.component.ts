import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { isStrongPassword } from '../../../core/utils/password-validator';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';
  confirmPassword = '';

  showPassword = false;
  showConfirmPassword = false;

  showRules = false;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  get hasLowercase() {
  return /[a-z]/.test(this.password);
}

get hasUppercase() {
  return /[A-Z]/.test(this.password);
}

get hasNumber() {
  return /\d/.test(this.password);
}

get hasSpecial() {
  return /[@$!%*?&]/.test(this.password);
}

get hasMinLength() {
  return this.password.length >= 8;
}

  register() {
    this.error = '';

    // if (!isStrongPassword(this.password)) {
    //   this.error = 'Password must be strong!';
    //   return;
    // }

    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match!';
      return;
    }

    this.auth
      .register(this.email, this.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.error = err.message;
      });
  }
}
