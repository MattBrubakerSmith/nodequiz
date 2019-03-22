import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private form: FormGroup = new FormGroup({
    'userId': new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^[0-9]*$/)
    ])
  });
  private attemptFailed: Boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  private onSubmit() {
    this.userService.loginUser(this.form.controls.userId.value, (success: Boolean) => {
      if(success) {
        this.router.navigate(["/quizzes"]);
      }
      else {
        this.attemptFailed = true;
      }
    });
  }
}
