import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_KEY = 'currentUser';

  private get localStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    if (!this.localStorageAvailable) return false;

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let foundUser = users.find((user: any) => user.email === email && user.password === password);

    if (foundUser) {
      localStorage.setItem(this.USER_KEY, JSON.stringify({ email }));
      this.router.navigate(['/movie']); // Redirect to user-table
      return true;
    } else {
      return false;
    }
  }

  signup(email: string, password: string): boolean {
    if (!this.localStorageAvailable) return false;

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let foundUser = users.find((user: any) => user.email === email);

    if (foundUser) {
      return false;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  logout(): void {
    if (!this.localStorageAvailable) return;

    localStorage.removeItem(this.USER_KEY);
    this.router.navigate([''])
  }

  isLoggedIn(): boolean {
    if (!this.localStorageAvailable) return false;
    console.log("auth-key",this.USER_KEY)

    return !!localStorage.getItem(this.USER_KEY);
  }

  getCurrentUser(): any {
    if (!this.localStorageAvailable) return null;

    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
}
