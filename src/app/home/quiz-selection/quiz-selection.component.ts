import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/session/user.service';
import { User } from "../../session/user";
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {
  private user: User;
  private quizzes: [Quiz];
  private mockQuizzes = [
    {
      title: "Enterprise JavaScript",
      description: "",
      slug: "enterprise-javascript"
    },
    {
      title: "RESTful APIs",
      description: "",
      slug: "restful-apis"
    },
    {
      title: "DevOps",
      description: "",
      slug: "devops"
    }
  ];

  constructor(private userService: UserService, private quizService: QuizService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.quizService.getAllQuizzes((quizzes) => this.quizzes = quizzes);
  }
}
