/*
 * BreadcrumbComponent
 * Displays a breadcrumb navigation trail for the current page.
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Breadcrumb {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  /** Array of breadcrumb items to display */
  @Input() breadcrumbs: Breadcrumb[] = [];
} 