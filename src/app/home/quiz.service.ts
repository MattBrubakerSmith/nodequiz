import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  public getAllQuizzes(callback: Function) {
    let quizzes$: Observable<[Quiz]>;
    quizzes$ = this.http.get("/api/quizzes") as Observable<[Quiz]>;
    quizzes$.subscribe({
      next: data => {
        console.log(data);
        callback(null, data as [Quiz]);
      },
      error: err => {
        console.error(err);
        callback(err, null);
      }
    });
  }
}
