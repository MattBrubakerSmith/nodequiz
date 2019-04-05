import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Question } from '../question';
import { UserService } from 'src/app/session/user.service';
import { User } from 'src/app/session/user';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  private user: User;
  private slug: String;
  private quiz: Quiz;
  private questions: [Question];
  private questionIndex = 0;
  private selectedAnswers = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];

  constructor(private route: ActivatedRoute, private quizService: QuizService, private userService: UserService, private router: Router) {
    this.slug = this.route.snapshot.paramMap.get("slug");
    this.quizService.getQuizBySlug(this.slug, (quiz) => {
      this.quiz = quiz;
      this.questions = quiz.questions;
    });
    this.user = this.userService.getUser();
  }

  private nextQuestion() {
    if(this.questionIndex >= this.questions.length - 1) return;
    this.questionIndex++;
  }

  private prevQuestion() {
    if(this.questionIndex <= 0) return;
    this.questionIndex--;
  }

  private getProgress():Number {
    let answerCount = 0;
    for(let sa of this.selectedAnswers) {
      if(sa != null) answerCount++;
    }
    return answerCount * 10;
  }

  private submitQuiz() {
    let score = 0;
    for(let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].correctAnswerIndex == this.selectedAnswers[i]) score += 10;
    }
    this.quizService.submitQuizAnswers(this.user.userId, this.quiz["_id"], this.selectedAnswers as [Number], score, qr => {
      console.log(qr);
      this.userService.loginUser(this.user.userId, success => {
        if(success) this.router.navigate(["/quiz-results/" + this.slug]);
      })
    });
  }
}
