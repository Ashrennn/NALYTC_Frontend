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
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Breadcrumb, BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];
  contactForm: FormGroup;
  formSubmitted = false;
  formSuccess = false;
  formError = false;

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

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

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.contactForm.value);

      // Simulate API call
      setTimeout(() => {
        this.formSuccess = true;
        this.contactForm.reset();
        this.formSubmitted = false;

        // Reset success message after 5 seconds
        setTimeout(() => {
          this.formSuccess = false;
        }, 5000);
      }, 1000);
    } else {
      this.formError = true;

      // Reset error message after 5 seconds
      setTimeout(() => {
        this.formError = false;
      }, 5000);
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      return `Minimum length is ${control.errors?.['minlength'].requiredLength} characters`;
    }
    return '';
  }
}
