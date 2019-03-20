import { Injectable } from '@angular/core';
import { User } from "./user";
import { Observable, Observer } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: Observable<User>;
  private user: User;

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(userId: String) {
    this.user$ = this.http.post<User>("/api/users", { userId: userId }, { headers: { 'Content-Type': 'application/json' } });
    this.user$.subscribe({
      next: user => this.user = user,
      error: err => console.error(err),
      complete: () => console.log(this.user)
    });
  }

  getUser(): User {
    return this.user;
  }
}
