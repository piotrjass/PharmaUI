import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../core/components/landing-page-cmps/top-navbar/top-navbar.component';
import { HeroSectionComponent } from '../../../core/components/landing-page-cmps/hero-section/hero-section.component';
import { Footer } from 'primeng/api';
import { FooterComponent } from '../../../core/components/landing-page-cmps/footer/footer.component';
//

//
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TopNavbarComponent, HeroSectionComponent, Footer, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
