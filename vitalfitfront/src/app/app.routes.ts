import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Training } from './training/training';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'training',
    component: Training
  }
];