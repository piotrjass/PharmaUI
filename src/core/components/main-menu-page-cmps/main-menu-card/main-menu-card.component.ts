import { Component, Input } from '@angular/core';
//
import { NgIconComponent, provideIcons } from '@ng-icons/core';
//
@Component({
  selector: 'app-main-menu-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './main-menu-card.component.html',
  styleUrl: './main-menu-card.component.css',
  viewProviders: [provideIcons({})],
})
export class MainMenuCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
}
