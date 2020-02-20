import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  get form() { 
    return this.loginForm.controls 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLoginSubmit() {

    this.submitted = true;
    if(this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.form.username.value, this.form.password.value)
    
  }

}


