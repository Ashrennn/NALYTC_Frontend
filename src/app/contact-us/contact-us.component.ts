/*
 * ContactUsComponent
 * Displays Nalytc contact information with SEO, breadcrumb, and responsive layout.
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Breadcrumb, BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // SEO
    this.title.setTitle('Contact Us | NALYTC');
    this.meta.addTags([
      { name: 'description', content: 'Contact Nalytc for AI infrastructure, developer platforms, consultations, and support. Find our address, business hours, and legal links.' },
      { name: 'keywords', content: 'contact, Nalytc, AI, infrastructure, support, consultation, address, business hours' },
      { property: 'og:title', content: 'Contact Us | NALYTC' },
      { property: 'og:description', content: 'Contact Nalytc for AI infrastructure, developer platforms, consultations, and support. Find our address, business hours, and legal links.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Contact Us | NALYTC' },
      { name: 'twitter:description', content: 'Contact Nalytc for AI infrastructure, developer platforms, consultations, and support. Find our address, business hours, and legal links.' }
    ]);
    // Breadcrumb
    this.breadcrumbs = [
      { label: 'Contact Us' }
    ];
  }
} 