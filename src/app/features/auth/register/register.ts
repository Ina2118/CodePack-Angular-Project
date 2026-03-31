import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  register() {
    console.log({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
}