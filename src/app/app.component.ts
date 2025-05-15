import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, FooterComponent],
  template: `
    <div class="app-container">
      <app-navigation></app-navigation>
      <main class="app-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    .app-container::before {
      content: '';
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: url('/assets/AI_Abstract.jpg') center center / cover no-repeat;
      z-index: 0;
      opacity: 0.25; /* Adjust for visibility */
      pointer-events: none; /* Allow interactions with page content */
    }

    .app-content {
      position: relative;
      flex: 1;
      margin: 0 0.3rem;
      padding: 2rem 0;
      z-index: 1; /* Above background */
    }
  `]
})
export class AppComponent implements AfterViewInit {
  title = 'nalytc';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
