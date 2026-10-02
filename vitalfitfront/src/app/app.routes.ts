import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Training } from './training/training';
import { Nutrition } from './nutrition/nutrition';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'training',
    component: Training
  },
  {
    path: 'nutrition',
    component: Nutrition
  },
  {
    path: 'contact',
    component: Contact
  }
];
