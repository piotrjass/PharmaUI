import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../component/top-navbar/top-navbar.component';

@Component({
  selector: 'app-durgs-base-page',
  standalone: true,
  imports: [TopNavbarComponent],
  templateUrl: './durgs-base-page.component.html',
  styleUrl: './durgs-base-page.component.css',
})
export class DurgsBasePageComponent {}
