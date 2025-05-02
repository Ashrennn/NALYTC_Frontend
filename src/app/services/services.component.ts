/*
 * ServicesComponent
 * Services page with SEO meta tags (title, description, Open Graph, Twitter card)
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb, BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Set page title
    this.title.setTitle('Services | NALYTC');

    // Set meta tags
    this.meta.addTags([
      { name: 'description', content: 'Explore Nalytc services: AI systems, LLM training, developer tools, and enterprise technology solutions.' },
      { name: 'keywords', content: 'Services, AI, LLM, developer tools, enterprise, technology' },
      // Open Graph
      { property: 'og:title', content: 'Services | NALYTC' },
      { property: 'og:description', content: 'Explore Nalytc services: AI systems, LLM training, developer tools, and enterprise technology solutions.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Services | NALYTC' },
      { name: 'twitter:description', content: 'Explore Nalytc services: AI systems, LLM training, developer tools, and enterprise technology solutions.' }
    ]);

    // Set breadcrumbs from route data
    this.breadcrumbs = [
      { label: this.route.snapshot.data['breadcrumb'] }
    ];
  }
} 