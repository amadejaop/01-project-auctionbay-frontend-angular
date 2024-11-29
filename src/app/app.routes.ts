import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'login', component: LoginComponent},
];

// https://angular.dev/guide/routing/router-tutorial
