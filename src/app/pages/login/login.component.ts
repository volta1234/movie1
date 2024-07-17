import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      if (!this.authService.login(this.email, this.password)) {
        alert("Invalid Email or password");
      }
    }, 2000)
  }
  }
