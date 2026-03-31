import { Injectable } from "@angular/core";
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , authState} from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user$;

    constructor(private auth: Auth) {
        this.user$ = authState(this.auth);
    }

    register(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    logout(){
        return signOut(this.auth);

    }

    isLoggedIn(): boolean {
        return !!this.auth.currentUser;
    }
}