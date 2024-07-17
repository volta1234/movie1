import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [FormsModule, RouterOutlet, RouterModule, AppComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(public authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) { }
  loading: boolean = false

  logout() {
    this.loading = true;

    setTimeout(() => {
      this.authService.logout();
      this.loading = false
    }, 2000)
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }
  }

  handleVisibilityChange() {
    if (document.hidden) {
      this.authService.logout();
    }
  }
  title = "furahApp"
}