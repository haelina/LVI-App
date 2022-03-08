import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth) {}

  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (err) {
      return null;
    }
  }

  async login({ email, password }) {
    try {
      const user = signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (err) {
      return null;
    }
  }

  logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    console.log('Google login in auth service');
    const user = signInWithPopup(this.auth, provider);
    console.log(user);
    return user;
  }

  currentUserUid() {
    const auth = getAuth();
    return auth.currentUser.uid;
  }
}
