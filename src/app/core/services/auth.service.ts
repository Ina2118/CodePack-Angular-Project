import { Injectable } from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
  User,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  sendPasswordResetEmail
} from "@angular/fire/auth";

import { Firestore, doc, docData } from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AppUser } from "../models/app-user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null>;
  userProfile$: Observable<AppUser | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: Auth, private firestore: Firestore) {

    this.user$ = authState(this.auth);

    this.isLoggedIn$ = this.user$.pipe(
      map(user => !!user)
    );

    this.userProfile$ = this.user$.pipe(
      switchMap(user => {
        if (!user) return of(null);

        const ref = doc(this.firestore, `users/${user.uid}`);
        return docData(ref) as Observable<AppUser>;
      })
    );
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string, rememberMe: boolean) {
    const persistence = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;

    return setPersistence(this.auth, persistence)
      .then(() => signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return signOut(this.auth);
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }
}