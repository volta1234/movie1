import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MovieComponent } from './pages/movie/movie.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'movie',
        component: MovieComponent,
        title: 'movies'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'signup'
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'reset pssword'
    }
];
