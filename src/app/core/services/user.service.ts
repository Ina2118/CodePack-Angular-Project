import { Injectable, inject } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Auth, authState } from '@angular/fire/auth';
import { of, switchMap } from 'rxjs';

export interface AppUser {
  name: string;
  role: string;
  team: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {

  private firestore = inject(Firestore);
  private auth = inject(Auth);

  user$ = authState(this.auth).pipe(
    switchMap(user => {
      if (!user) return of (null);

      const ref = doc(this.firestore, `users/${user.uid}`);
      return docData(ref) as any;
    })
  );
}