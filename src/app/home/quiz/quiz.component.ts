import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  private slug: String;

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get("slug");
  }
}
