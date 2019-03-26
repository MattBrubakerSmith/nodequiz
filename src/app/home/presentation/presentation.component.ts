import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  private slug: String;
  private quiz: Quiz;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.slug = this.route.snapshot.paramMap.get("slug");
    this.quizService.getQuizDescriptionBySlug(this.slug, (quiz) => this.quiz = quiz);
  }

  ngOnInit() {
    
  }
}
