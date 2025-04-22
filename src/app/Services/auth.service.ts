import { inject, Injectable } from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { User } from '../Interfaces/User.model';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}
  
  getAuth (){
    return getAuth();
  }
  register (user:User){
    return createUserWithEmailAndPassword(getAuth(),user.email,user.password);
  }

  logIn(user:User){
    return signInWithEmailAndPassword(getAuth(),user.email,user.password);
  }
  logInGoogle(){
    return signInWithPopup(getAuth(), new GoogleAuthProvider())
  }
  logLogout(){
    return signOut(getAuth());
  }
  IsAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token;
    }
    return false;
  }
}
