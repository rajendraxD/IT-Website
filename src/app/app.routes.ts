import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Services } from './pages/services/services';
import { ContactUs } from './pages/contact-us/contact-us';
import { AboutUs } from './pages/about-us/about-us';
import { Careers } from './pages/careers/careers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'dashboard', component: Dashboard },
  { path: 'services', component: Services },
  { path: 'contact-us', component: ContactUs },
  { path: 'about-us', component: AboutUs },
  { path: 'careers', component: Careers },
];
