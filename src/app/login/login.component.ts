import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../_helpers/passwordMatch.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  isLoggedIn = false;
  newUser = false;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //Login Form
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    //Signup Form
    this.signUpForm = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      userEmailId: new FormControl('', [Validators.required, Validators.email]),

      account: this.formBuilder.group(
        {
          userPassword: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        },
        { validator: this.comparePasswords }
      ),
    });
  }

  onLogin() {
    console.log(this.loginForm.value);
    if (
      this.loginForm.value.email === 'rahulanand2690@gmail.com' &&
      this.loginForm.value.password === '123456'
    ) {
      this.isLoggedIn = true;
      // alert('Loggin Sucesshul!!!');
      this.loginForm.reset();
    } else {
      this.loginForm.reset();
      alert('Loggin Failed!!!');
    }
  }
  onSignup() {
    this.newUser =false;
    console.log('New user added' + JSON.stringify(this.signUpForm.value));
    this.router.navigate(['/login']);
  }
  onLogout() {
    this.loginForm.reset();
    this.router.navigate(['/login']);
  }
  onNewUser() {
    this.newUser = true;
  }

  comparePasswords(c: AbstractControl) {
    return c.get('userPassword').value === c.get('confirmPassword').value
      ? null
      : { nomatch: true };
  }
}

// Validator Function with parameter
/* function ComparePass(c: AbstractControl): ValidatorFn {
  return (c) => c.get('userPassword').value === c.get('confirmPassword').value
    ? null
    : { nomatch: true };
}
 */
