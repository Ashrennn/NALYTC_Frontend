import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, FooterComponent], // Import RouterModule here
  template: `
    <div class="app-container">
      <app-navigation></app-navigation>
      <main class="app-content">
        <router-outlet></router-outlet>  <!-- This should now work properly -->
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .app-content {
      position: relative;
      flex: 1;
      margin: 0 0.3rem;
      padding: 2rem 0;
      z-index: 1;
      overflow: hidden;
    }

    .app-content::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  title = 'nalytc';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Listen for NavigationEnd event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page after navigation
        window.scrollTo(0, 0);
      }
    });
  }
}
