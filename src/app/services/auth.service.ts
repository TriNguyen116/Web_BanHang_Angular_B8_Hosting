import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider,User,authState,getAuth,signInWithPopup,signOut } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null;
  constructor(public auth: Auth) { 
    authState(auth).subscribe((user)=>{
      console.log(user);
      if(user){
        this.user = user;
      } else {
        this.user = null;
      }
    })
  }
  googleAuthProvider = new GoogleAuthProvider();


  async login() {
    let result = await signInWithPopup(this.auth, this.googleAuthProvider)
    console.log(result.user)
    return result
  }
  logout() {
    return signOut(this.auth)
  }
}
