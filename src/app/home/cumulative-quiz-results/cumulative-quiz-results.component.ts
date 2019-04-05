import { Component } from '@angular/core';
import { UserService } from 'src/app/session/user.service';
import { User } from 'src/app/session/user';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-cumulative-quiz-results',
  templateUrl: './cumulative-quiz-results.component.html',
  styleUrls: ['./cumulative-quiz-results.component.css']
})
export class CumulativeQuizResultsComponent {
  private users: [User];
  private quizzes: [Quiz];

  constructor(private userService: UserService, private quizService: QuizService) {
    this.userService.getAllUsers(users => this.users = users);
    this.quizService.getAllQuizzesWithAnswers(quizzes => this.quizzes = quizzes);
  }

  private getQuizById(quizId): Quiz {
    for(let quiz of this.quizzes) {
      if(quizId == quiz["_id"]) return quiz;
    }
  }
}
