import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { LegalComplianceComponent } from './legal-compliance/legal-compliance.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
  { path: 'services', component: ServicesComponent, data: { breadcrumb: 'Services' } },
  { path: 'case-studies', component: CaseStudiesComponent, data: { breadcrumb: 'Case Studies' } },
  { path: 'legal-compliance', component: LegalComplianceComponent, data: { breadcrumb: 'Legal & Compliance' } },
  { path: 'contact-us', component: ContactUsComponent, data: { breadcrumb: 'Contact Us' } },
  { path: '**', redirectTo: '' }
]; 