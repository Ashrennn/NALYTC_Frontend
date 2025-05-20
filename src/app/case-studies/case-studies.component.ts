/*
 * CaseStudyComponent
 * Displays Nalytc case studies with SEO, breadcrumb, and responsive layout.
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Component, OnInit, ElementRef, QueryList, ViewChildren, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Breadcrumb, BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit, AfterViewInit {
  breadcrumbs: Breadcrumb[] = [];

  caseStudies = [
    {
      title: 'Robotics Research Lab - Zurich, Switzerland',
      image: '../../assets/Center.jpg',
      challenge: 'A European robotics institute needed to process real-time sensory data while running parallel LLM inference workloads.',
      solution: 'Nalytc delivered a custom multi-GPU compute node with high-throughput I/O, advanced thermal management, and containerized inference deployment.',
      outcome: 'The lab saw a 60% improvement in processing time and reduced hardware-related interruptions by 90%.',
      visible: false
    },
    {
      title: 'FinTech Firm - Frankfurt, Germany',
      image: '../../assets/FinTech.jpg',
      challenge: 'The client required a secure, low-latency environment to retrain financial models on sensitive market data.',
      solution: 'We built a hybrid infrastructure combining on-prem compute with automated cloud backups, featuring encrypted storage and disaster recovery protocols.',
      outcome: 'Daily model refresh cycles dropped from 9 hours to 3.5 hours, and system availability increased to 99.98%.',
      visible: false
    },
    {
      title: 'Creative Studio - Vienna, Austria',
      image: '../../assets/Creative.jpg',
      challenge: 'The studio faced render queue delays and version control issues with remote video editors and animators.',
      solution: 'Nalytc deployed a rack-mounted creative compute stack with RTX 4090 nodes, Adobe CC environments, and integrated storage syncing.',
      outcome: 'Render time was cut in half, and global team collaboration became seamless and real-time.',
      visible: false
    },
    {
      title: 'AI Startup - Dubai, UAE',
      image: '../../assets/AI-Startup.jpg',
      challenge: 'The client needed infrastructure to train a multilingual LLM model under strict time constraints.',
      solution: 'Nalytc supplied a temporary training cluster with four interconnected multi-GPU nodes, using DeepSeek and open-source LLMs for rapid development and iteration.',
      outcome: 'The startup completed its fine-tuning in 10 days - ahead of deadline - with inference latency under 50ms.',
      visible: false
    }
  ];

  @ViewChildren('caseCard') caseCardElems!: QueryList<ElementRef>;

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef  // Inject ChangeDetectorRef here
  ) {}

  ngOnInit(): void {
    // SEO
    this.title.setTitle('Case Studies | NALYTC');
    this.meta.addTags([
      { name: 'description', content: 'Explore Nalytc case studies: real-world AI, infrastructure, and cloud solutions for robotics, finance, creative, and startup clients.' },
      { name: 'keywords', content: 'case studies, AI, infrastructure, cloud, robotics, finance, creative, startup, Nalytc' },
      { property: 'og:title', content: 'Case Studies | NALYTC' },
      { property: 'og:description', content: 'Explore Nalytc case studies: real-world AI, infrastructure, and cloud solutions for robotics, finance, creative, and startup clients.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Case Studies | NALYTC' },
      { name: 'twitter:description', content: 'Explore Nalytc case studies: real-world AI, infrastructure, and cloud solutions for robotics, finance, creative, and startup clients.' }
    ]);
    // Breadcrumb
    this.breadcrumbs = [
      { label: 'Case Studies' }
    ];
  }

  ngAfterViewInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.caseCardElems) return;

    let changed = false;

    this.caseCardElems.forEach((elem, idx) => {
      const rect = elem.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && !this.caseStudies[idx].visible) {
        this.caseStudies[idx].visible = true;
        changed = true;
      }
    });

    if (changed) {
      this.cd.detectChanges(); // Tell Angular to update view immediately
    }
  }
}