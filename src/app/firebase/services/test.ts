import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class TestService {
  constructor(private auth: Auth) {
    console.log('Firebase Auth instance:', auth);
  }
}