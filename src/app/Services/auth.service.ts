import { Injectable } from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { User } from '../Interfaces/User.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
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
    return signInWithPopup(getAuth(), new GoogleAuthProvider)
  }
  logLogout(){
    return signOut(getAuth());
  }
  IsAuthenticated():boolean{
    const user = getAuth().currentUser;
    return user !== null;
  }
}
