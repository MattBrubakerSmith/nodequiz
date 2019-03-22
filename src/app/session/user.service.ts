import { Injectable, Inject } from '@angular/core';
import { User } from "./user";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData$: Observable<User>;
  private storageKey = "nodequiz_user";

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService, private router: Router) { }

  public loginUser(userId: String) {
    this.userData$ = this.http.post<User>("/api/users", { userId: userId }, { headers: { 'Content-Type': 'application/json' } });
    this.userData$.subscribe({
      next: data => this.storeInLocalStorage(data as User),
      error: err => console.error(err),
      complete: () => this.router.navigate(["/quizzes"]) 
    });
  }

  private storeInLocalStorage(user: User) {
    this.storage.set(this.storageKey, user);
  }

  public getUser(): Observable<User> {
    return new Observable(user => {
      setInterval(() => {
        user.next(this.storage.get(this.storageKey) as User),
        1000
      });
    });
  }
}
