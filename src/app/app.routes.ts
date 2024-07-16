import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MovieComponent } from './pages/movie/movie.component';
import { LoginComponent } from './pages/login/login.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'home page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login page'
    },
    {
        path: 'movie',
        component: MovieComponent,
        title: 'movie page'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'signup page'
    }
];
