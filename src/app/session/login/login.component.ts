import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

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

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.loginUser(this.form.controls.userId.value);
  }
}
