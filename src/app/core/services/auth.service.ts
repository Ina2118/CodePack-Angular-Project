import { Injectable } from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
  User
} from "@angular/fire/auth";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { sendPasswordResetEmail } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null>;
  isLoggedIn$;

  constructor(private auth: Auth) {
    this.user$ = authState(this.auth);

    this.isLoggedIn$ = this.user$.pipe(
      map(user => !!user)
    );
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  resetPassword(email: string) {
  return sendPasswordResetEmail(this.auth, email);
}
}