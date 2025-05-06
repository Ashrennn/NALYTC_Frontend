/*
 * LegalComplianceComponent
 * Displays Nalytc legal and compliance information with SEO, breadcrumb, and responsive layout.
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Component, OnInit, ElementRef, QueryList, ViewChildren, HostListener, AfterViewInit } from '@angular/core';
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
export class LegalComplianceComponent implements OnInit, AfterViewInit {
  breadcrumbs: Breadcrumb[] = [];
  sectionVisible = [false, false, false];
  @ViewChildren('legalSection') legalSectionElems!: QueryList<ElementRef>;

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

  ngAfterViewInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.legalSectionElems) return;
    this.legalSectionElems.forEach((elem, idx) => {
      const rect = elem.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        this.sectionVisible[idx] = true;
      }
    });
  }
}
