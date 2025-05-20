/*
 * HomeComponent
 * Home page with SEO meta tags (title, description, Open Graph, Twitter card)
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  breadcrumbs: Breadcrumb[] = [];

  offerSlides = [
    {
      image: 'assets/AI_Systems.webp',
      title: 'AI Systems & Intelligence',
      description:
        'Design and deployment of custom AI infrastructure, model workflows, and real-time inference pipelines.'
    },
    {
      image: 'assets/Developer.webp',
      title: 'Developer Platforms',
      description:
        'Virtualized, GPU-powered environments with preconfigured toolchains – accessible anywhere, built for productivity.'
    },
    {
      image: 'assets/Infrastructure.webp',
      title: 'I/O Infrastructure Engineering',
      description:
        'High-speed networking, rack design, power optimization, and storage solutions tailored for extreme environments.'
    },
    {
      image: 'assets/Cloud.webp',
      title: 'Cloud Hosting & Virtualization',
      description:
        'Private cloud, virtual machines, and containerized services backed by resilient hardware and proactive support.'
    },
    {
      image: 'assets/Training.webp',
      title: 'LLM Training & Optimization',
      description:
        'End-to-end fine-tuning, dataset engineering, and deployment support for large language models and generative AI systems.'
    }
  ];

  currentOffer = 0;
  intervalId: any;
  slideDirection: 'none' | 'left' | 'right' = 'none';

  @ViewChild('carousel', { static: false }) carouselRef!: ElementRef;
  touchStartX = 0;
  touchEndX = 0;

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title.setTitle(
      'NALYTC | Engineering Intelligence. Scaling Innovation.'
    );

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Nalytc delivers enterprise-grade technology solutions for AI, LLM, and developer tools from Dubai.'
      },
      {
        name: 'keywords',
        content: 'AI, LLM, developer tools, Dubai, technology, innovation'
      },
      {
        property: 'og:title',
        content: 'NALYTC | Engineering Intelligence. Scaling Innovation.'
      },
      {
        property: 'og:description',
        content:
          'Nalytc delivers enterprise-grade technology solutions for AI, LLM, and developer tools from Dubai.'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'NALYTC | Engineering Intelligence. Scaling Innovation.'
      },
      {
        name: 'twitter:description',
        content:
          'Nalytc delivers enterprise-grade technology solutions for AI, LLM, and developer tools from Dubai.'
      }
    ]);

    this.breadcrumbs = [
      { label: this.route.snapshot.data['breadcrumb'] }
    ];

    this.startCarousel();
  }

  ngAfterViewInit(): void {
    // Delay access to carouselRef to avoid undefined error
    setTimeout(() => {
      if (this.carouselRef?.nativeElement) {
        const carousel = this.carouselRef.nativeElement;

        carousel.addEventListener('touchstart', (e: TouchEvent) => {
          this.touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e: TouchEvent) => {
          this.touchEndX = e.changedTouches[0].screenX;
          this.handleSwipe();
        });
      }
    });
  }

  handleSwipe(): void {
    const deltaX = this.touchEndX - this.touchStartX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        this.prevOffer();
      } else {
        this.nextOffer();
      }
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextOffer();
    }, 5000);
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextOffer() {
    this.slideDirection = 'left';
    setTimeout(() => {
      this.currentOffer = (this.currentOffer + 1) % this.offerSlides.length;
      this.slideDirection = 'none';
    }, 600);
  }

  prevOffer() {
    this.slideDirection = 'right';
    setTimeout(() => {
      this.currentOffer =
        (this.currentOffer - 1 + this.offerSlides.length) %
        this.offerSlides.length;
      this.slideDirection = 'none';
    }, 600);
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }
}
