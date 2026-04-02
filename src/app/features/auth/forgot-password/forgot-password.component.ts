import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';



@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {

  email: string = '';
  message: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  resetPassword() {
    this.authService.resetPassword(this.email)
      .then(() => {
        this.message = 'Check your email for reset link';
        this.error = '';
      })
      .catch((err) => {
        this.error = err.message;
        this.message = '';
      });
  }
}