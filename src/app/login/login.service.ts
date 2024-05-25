import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private loggedIn = new BehaviorSubject<boolean>(false);
    private userData = new BehaviorSubject<any>(null);
  
    constructor() {}
  
    login(user: any, logged: boolean): void {
      this.loggedIn.next(logged);
      this.userData.next(user);
    }
  
    logout(): void {
      this.loggedIn.next(false);
      this.userData.next(null);
    }
  
    isLoggedIn(): Observable<boolean> {
      return this.loggedIn.asObservable();
    }
  
    getUserData(): Observable<any> {
      return this.userData.asObservable();
    }
}