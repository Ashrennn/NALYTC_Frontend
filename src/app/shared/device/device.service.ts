/*
 * DeviceService
 * Provides device type detection (mobile, tablet, desktop) for responsive logic.
 * Author: [Your Name]
 * Date: [Today's Date]
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  /** Returns true if the device is mobile */
  isMobile(): boolean {
    return window.innerWidth <= 767;
  }

  /** Returns true if the device is a tablet */
  isTablet(): boolean {
    return window.innerWidth > 767 && window.innerWidth <= 1024;
  }

  /** Returns true if the device is a desktop */
  isDesktop(): boolean {
    return window.innerWidth > 1024;
  }
} 