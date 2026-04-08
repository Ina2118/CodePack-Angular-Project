import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { AppUser } from '../../../core/models/app-user.model';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class ProfileComponent {
  user$!: Observable<AppUser | null>;
  isLoggedIn$!: Observable<boolean>;
  editMode = false;

  constructor(
    private auth: AuthService,
    private firestore: Firestore,
  ) {
    this.user$ = this.auth.userProfile$;
    this.isLoggedIn$ = this.auth.isLoggedIn$;
  }

  updateProfile(user: AppUser) {
    this.auth.user$.pipe(take(1)).subscribe((current) => {
      if (!current) return;

      const ref = doc(this.firestore, `users/${current.uid}`);

      updateDoc(ref, {
        name: user.name,
        role: user.role,
        team: user.team,
      }).then(() => {
        this.editMode = false;
      }).catch((err) => console.error(err));
    });
  }
}