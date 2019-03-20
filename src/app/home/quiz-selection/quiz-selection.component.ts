import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/session/user.service';


@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {
  private user = {
    next: x => console.log(x),
    error: err => console.error(err),
    complete: () => console.log("complete")
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(this.user);
  }

}
