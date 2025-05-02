/*
 * HomeComponent
 * Home page with SEO meta tags (title, description, Open Graph, Twitter card)
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { Breadcrumb } from '../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Set page title
    this.title.setTitle('NALYTC | Engineering Intelligence. Scaling Innovation.');

    // Set meta tags
    this.meta.addTags([
      { name: 'description', content: 'Nalytc delivers enterprise-grade technology solutions for AI, LLM, and developer tools from Dubai.' },
      { name: 'keywords', content: 'AI, LLM, developer tools, Dubai, technology, innovation' },
      // Open Graph
      { property: 'og:title', content: 'NALYTC | Engineering Intelligence. Scaling Innovation.' },
      { property: 'og:description', content: 'Nalytc delivers enterprise-grade technology solutions for AI, LLM, and developer tools from Dubai.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'NALYTC | Engineering Intelligence. Scaling Innovation.' },
      { name: 'twitter:description', content: 'Nalytc delivers enterprise-grade technology solutions for AI, LLM, and developer tools from Dubai.' }
    ]);

    // Set breadcrumbs from route data
    this.breadcrumbs = [
      { label: this.route.snapshot.data['breadcrumb'] }
    ];
  }
} 