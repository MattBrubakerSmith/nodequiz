import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz';
import { Observable } from 'rxjs';
import { QuizResult } from './quiz-result';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  public getAllQuizzes(callback: Function) {
    let quizzes$: Observable<[Quiz]>;
    quizzes$ = this.http.get("/api/quizzes") as Observable<[Quiz]>;
    quizzes$.subscribe({
      next: data => callback(data as [Quiz]),
      error: err => console.error(err)
    });
  }

  public getAllQuizzesWithAnswers(callback: Function) {
    let quizzes$: Observable<[Quiz]>;
    quizzes$ = this.http.get("/api/quizzes/with-answers") as Observable<[Quiz]>;
    quizzes$.subscribe({
      next: data => callback(data as [Quiz]),
      error: err => console.error(err)
    });
  }

  public getQuizBySlug(slug: String, callback: Function) {
    let quiz$: Observable<Quiz>;
    quiz$ = this.http.get("/api/quizzes/" + slug) as Observable<Quiz>;
    quiz$.subscribe({
      next: data => callback(data as Quiz),
      error: err => console.error(err)
    });
  }

  public getQuizDescriptionBySlug(slug: String, callback: Function) {
    let quiz$: Observable<Quiz>;
    quiz$ = this.http.get("/api/quizzes/description/" + slug) as Observable<Quiz>;
    quiz$.subscribe({
      next: data => callback(data as Quiz),
      error: err => console.error(err)
    });
  }

  public submitQuizAnswers(userId: String, quizId:String, answers:[Number], score: Number, callback: Function) { 
    let quizResult$: Observable<QuizResult>;
    quizResult$ = this.http.patch("api/users", {
      userId: userId,
      quizId: quizId,
      answers: answers,
      score: score
    }) as Observable<QuizResult>;
    quizResult$.subscribe({
      next: data => callback(data as QuizResult),
      error: err => console.error(err)
    });
  }
}
