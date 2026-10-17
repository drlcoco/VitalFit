import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Training } from './training/training';
import { Nutrition } from './nutrition/nutrition';
import { Contact } from './contact/contact';
import { StaticPage } from './static-page/static-page';
import { About } from './about/about';
import { Services } from './services/services';
import { Pricing } from './pricing/pricing';
import { Gallery } from './gallery/gallery';
import { Blog } from './blog/blog';
import { Progress } from './progress/progress';

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
    component: About
  },
  {
    path: 'services',
    component: Services
  },
  {
    path: 'pricing',
    component: Pricing
  },
  {
    path: 'nutrition',
    component: Nutrition
  },
  {
    path: 'progress',
    component: Progress
  },
  {
    path: 'gallery',
    component: Gallery
  },
  {
    path: 'blog',
    component: Blog
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
