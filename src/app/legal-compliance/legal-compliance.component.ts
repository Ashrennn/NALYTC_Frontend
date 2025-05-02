/*
 * LegalComplianceComponent
 * Displays Nalytc legal and compliance information with SEO, breadcrumb, and responsive layout.
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Breadcrumb, BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-legal-compliance',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './legal-compliance.component.html',
  styleUrls: ['./legal-compliance.component.scss']
})
export class LegalComplianceComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // SEO
    this.title.setTitle('Legal & Compliance | NALYTC');
    this.meta.addTags([
      { name: 'description', content: 'Read Nalytc\'s privacy policy, terms of service, and acceptable use policy. Learn about our data protection, compliance, and legal standards.' },
      { name: 'keywords', content: 'legal, compliance, privacy policy, terms of service, acceptable use, Nalytc' },
      { property: 'og:title', content: 'Legal & Compliance | NALYTC' },
      { property: 'og:description', content: 'Read Nalytc\'s privacy policy, terms of service, and acceptable use policy. Learn about our data protection, compliance, and legal standards.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Legal & Compliance | NALYTC' },
      { name: 'twitter:description', content: 'Read Nalytc\'s privacy policy, terms of service, and acceptable use policy. Learn about our data protection, compliance, and legal standards.' }
    ]);
    // Breadcrumb
    this.breadcrumbs = [
      { label: 'Legal & Compliance' }
    ];
  }
} 