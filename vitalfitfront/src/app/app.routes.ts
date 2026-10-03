import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Training } from './training/training';
import { Nutrition } from './nutrition/nutrition';
import { Contact } from './contact/contact';
import { StaticPage } from './static-page/static-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'training',
    component: Training
  },
  {
    path: 'about',
    component: StaticPage,
    data: { title: 'About' }
  },
  {
    path: 'services',
    component: StaticPage,
    data: { title: 'Services' }
  },
  {
    path: 'pricing',
    component: StaticPage,
    data: { title: 'Pricing' }
  },
  {
    path: 'nutrition',
    component: Nutrition
  },
  {
    path: 'gallery',
    component: StaticPage,
    data: { title: 'Gallery' }
  },
  {
    path: 'blog',
    component: StaticPage,
    data: { title: 'Blog' }
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'join',
    component: StaticPage,
    data: { title: 'Join Now' }
  }
];
