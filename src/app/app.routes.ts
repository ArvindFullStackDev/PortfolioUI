import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  // When a user visits the blank root path '', instantly redirect them to /home
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  
  // This defines the /home route and renders the AppComponent inside <router-outlet>
  { path: 'home', component: App }
];