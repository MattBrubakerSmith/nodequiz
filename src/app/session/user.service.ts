import { Injectable, Inject } from '@angular/core';
import { User } from "./user";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: Observable<User>;
  private STORAGE_KEY = "nodequiz_user";

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public loginUser(userId: String) {
    this.user$ = this.http.post<User>("/api/users", { userId: userId }, { headers: { 'Content-Type': 'application/json' } });
    this.user$.subscribe(data => {
      this.storeInLocalStorage(data as User);
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  private storeInLocalStorage(user: User) {
    this.storage.set(this.STORAGE_KEY, user);
  }

  public getUser(): User {
    return this.storage.get(this.STORAGE_KEY) as User;
  }
}
