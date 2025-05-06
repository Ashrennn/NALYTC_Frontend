import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent],
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
}

.app-content {
  position: relative;
  flex: 1;
  margin: 0 0.3rem;       // Adds 0.5rem margin on both left and right
  padding: 2rem 0;         // Keeps vertical padding but removes horizontal
  z-index: 1;
  overflow: hidden;
}

  .app-content::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    // background-image: url('/assets/Main_Wallpaper.jpg');
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    // opacity: 0.6; /* Adjust transparency */
    // z-index: -1;
  }
  `]
})
export class AppComponent {
  title = 'nalytc';
}