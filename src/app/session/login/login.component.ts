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

  private user = {
    next: x => console.log(x),
    error: err => console.error(err),
    complete: () => console.log("complete")
  }

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.loginUser(this.form.controls.userId.value);
    this.userService.getUser().subscribe(this.user);
  }
}
