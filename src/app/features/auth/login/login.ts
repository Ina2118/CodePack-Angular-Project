import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(){
    this.errorMessage = '';
    this.auth.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
  }
}
