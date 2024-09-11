import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingPageComponent } from '@fabian-apps-ws/landingPage';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LandingPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fabian-projects';
}
