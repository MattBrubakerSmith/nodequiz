import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizResult } from '../quiz-result';
import { Quiz } from '../quiz';
import { User } from 'src/app/session/user';
import { QuizService } from '../quiz.service';
import { UserService } from 'src/app/session/user.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent {
  private quizResult: QuizResult;
  private quiz: Quiz;
  private user: User;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private userService: UserService) {
    this.user = this.userService.getUser();
    let slug = this.route.snapshot.paramMap.get("slug");
    this.quizService.getQuizBySlug(slug, quiz => {
      this.quiz = quiz;
      let quizId = this.quiz["_id"];
      for(let qr of this.user["quizResults"]) {
        if(qr.quizId == quizId) {
          this.quizResult = qr;
        }
      }
    });
  }
}
