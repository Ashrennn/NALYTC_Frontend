/*
 * AboutComponent
 * About page with SEO meta tags (title, description, Open Graph, Twitter card)
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
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Set page title
    this.title.setTitle('About | NALYTC');

    // Set meta tags
    this.meta.addTags([
      { name: 'description', content: 'Learn more about Nalytc, our mission, and our team of technology innovators.' },
      { name: 'keywords', content: 'About, Nalytc, team, mission, technology, innovation' },
      // Open Graph
      { property: 'og:title', content: 'About | NALYTC' },
      { property: 'og:description', content: 'Learn more about Nalytc, our mission, and our team of technology innovators.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'About | NALYTC' },
      { name: 'twitter:description', content: 'Learn more about Nalytc, our mission, and our team of technology innovators.' }
    ]);

    // Set breadcrumbs from route data
    this.breadcrumbs = [
      { label: this.route.snapshot.data['breadcrumb'] }
    ];
  }
} 