import { Injectable, Inject } from '@angular/core';
import { User } from "./user";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData$: Observable<User>;
  private storageKey = "nodequiz_user";

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public loginUser(userId: String) {
    this.userData$ = this.http.post<User>("/api/users", { userId: userId }, { headers: { 'Content-Type': 'application/json' } });
    this.userData$.subscribe(data => {
      this.storeInLocalStorage(data as User);
      console.log(data);
    }, err => {
      console.log(err);
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
