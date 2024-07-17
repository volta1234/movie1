import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userSignup: signUp = new signUp();
  constructor(private router: Router){}

  onSubmit() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some((user: any) => user.email === this.userSignup.email)) {
      alert('This email is already registered. please Login to continue.');
      this.router.navigate(["/login"])
      return;
    }

    users.push(this.userSignup);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Welcome to volta Dynamics, proceed to Login.');
    this.router.navigate(["/login"])
  }
}

export class signUp {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
