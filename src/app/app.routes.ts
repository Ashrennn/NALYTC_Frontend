import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
    data: { breadcrumb: 'About' }
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./services/services.component').then((m) => m.ServicesComponent),
    data: { breadcrumb: 'Services' }
  },
  {
    path: 'case-studies',
    loadComponent: () =>
      import('./case-studies/case-studies.component').then((m) => m.CaseStudiesComponent),
    data: { breadcrumb: 'Case Studies' }
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then((m) => m.ContactUsComponent),
    data: { breadcrumb: 'Contact Us' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
