import { Component, Input, HostListener } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowRightCircleFill,
  bootstrapArrowLeftCircleFill,
} from '@ng-icons/bootstrap-icons';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview-nav',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  templateUrl: './overview-nav.component.html',
  styleUrl: './overview-nav.component.css',
  viewProviders: [
    provideIcons({
      bootstrapArrowRightCircleFill,
      bootstrapArrowLeftCircleFill,
    }),
  ],
})
export class OverviewNavComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  @Input() back_router_link: string = '';
  @Input() next_router_link: string = '';

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.router.navigate([this.back_router_link]);
    } else if (event.key === 'ArrowRight') {
      this.router.navigate([this.next_router_link]);
    }
  }
}
