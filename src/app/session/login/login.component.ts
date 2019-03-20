import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    'userId': new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^[0-9]*$/)
    ])
  });

  constructor(private httpClient: HttpClient) { }

  onSubmit() {
    console.log(this.form);
  }

  login():void {

  }
}
