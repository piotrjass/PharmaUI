import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  @Input() section: string = '';
  @Input() additional_text: string = '';
}
