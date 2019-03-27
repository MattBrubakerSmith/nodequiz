import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
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

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.slug = this.route.snapshot.paramMap.get("slug");
    this.quizService.getQuizBySlug(this.slug, (quiz) => {
      this.quiz = quiz;
      this.questions = quiz.questions;
    });
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
    let checkedAnswers = [];
    for(let i = 0; i < this.questions.length; i++) {
      checkedAnswers.push(this.questions[i].correctAnswerIndex == this.selectedAnswers[i]);
    }
    console.log(checkedAnswers);
  }
}
