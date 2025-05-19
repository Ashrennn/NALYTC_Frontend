/*
 * ServicesComponent
 * Services page with SEO meta tags (title, description, Open Graph, Twitter card)
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ServicesComponent implements OnInit, OnDestroy {
  breadcrumbs: Breadcrumb[] = [];

  serviceCards = [
    {
      icon: 'fas fa-microchip',
      title: 'GPU-Accelerated Servers',
      desc: 'High-performance computing environments optimized for AI workloads.',
      features: [
        'Custom GPU configurations',
        'High-speed networking',
        'Advanced cooling solutions',
        '24/7 monitoring',
      ],
    },
    {
      icon: 'fas fa-brain',
      title: 'LLM Training Pipelines',
      desc: 'End-to-end solutions for training and fine-tuning large language models.',
      features: [
        'Distributed training setup',
        'Data preprocessing',
        'Model optimization',
        'Performance monitoring',
      ],
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Virtualized Developer Platforms',
      desc: 'Secure, scalable environments for development and testing.',
      features: [
        'Isolated workspaces',
        'Resource allocation',
        'Version control integration',
        'CI/CD pipelines',
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Enterprise Hosting',
      desc: 'Reliable, secure hosting solutions for mission-critical applications.',
      features: [
        'High availability',
        'Security compliance',
        'Disaster recovery',
        'Performance optimization',
      ],
    },
  ];

  currentIndex = 0;
  intervalId: any;
  animationClass = '';

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title.setTitle('Services | NALYTC');

    this.meta.addTags([
      { name: 'description', content: 'Explore Nalytc services: AI systems, LLM training, developer tools, and enterprise technology solutions.' },
      { name: 'keywords', content: 'Services, AI, LLM, developer tools, enterprise, technology' },
      { property: 'og:title', content: 'Services | NALYTC' },
      { property: 'og:description', content: 'Explore Nalytc services: AI systems, LLM training, developer tools, and enterprise technology solutions.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Services | NALYTC' },
      { name: 'twitter:description', content: 'Explore Nalytc services: AI systems, LLM training, developer tools, and enterprise technology solutions.' }
    ]);

    this.breadcrumbs = [
      { label: this.route.snapshot.data['breadcrumb'] }
    ];

    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextCard();
    }, 4000);
  }

  nextCard() {
    this.animationClass = 'slide-in-right';
    setTimeout(() => { this.animationClass = ''; }, 300);
    this.currentIndex = (this.currentIndex + 1) % this.serviceCards.length;
  }

  prevCard() {
    this.animationClass = 'slide-in-left';
    setTimeout(() => { this.animationClass = ''; }, 300);
    this.currentIndex = (this.currentIndex - 1 + this.serviceCards.length) % this.serviceCards.length;
  }

  setCurrentCard(index: number) {
    if (index === this.currentIndex) return;
    this.animationClass = index > this.currentIndex ? 'slide-in-right' : 'slide-in-left';
    this.currentIndex = index;
  }
}