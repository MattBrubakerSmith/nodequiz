import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  private slug: String;

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get("slug");
  }
}
