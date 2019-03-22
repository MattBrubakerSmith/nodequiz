import { Injectable, Inject } from '@angular/core';
import { User } from "./user";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData$: Observable<User>;
  private storageKey = "nodequiz_user";

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public loginUser(loginComponent: LoginComponent, userId: String) {
    this.userData$ = this.http.post<User>("/api/users", { userId: userId }, { headers: { 'Content-Type': 'application/json' } });
    this.userData$.subscribe({
      next: data => {
        console.log(data);
        this.storeInLocalStorage(data as User);
        loginComponent.confirmLogin(true);
      },
      error: err => {
        console.error(err);
        loginComponent.confirmLogin(false);
      }
    });
  }

  private storeInLocalStorage(user: User) {
    this.storage.set(this.storageKey, user);
  }

  public getUser(): User {
    return this.storage.get(this.storageKey) as User;
  }
}
