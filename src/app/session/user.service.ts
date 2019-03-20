import { Injectable } from '@angular/core';
import { User } from "./user";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: Observable<User>;

  constructor(private http: HttpClient) { }

  loginUser(userId: String) {
    this.user$ = this.http.post<User>("/api/users", { userId: userId }, { headers: { 'Content-Type': 'application/json' } });
  }

  getUser(): Observable<User> {
    return this.user$;
  }
}
