import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowRightCircleFill } from '@ng-icons/bootstrap-icons';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview-nav',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  templateUrl: './overview-nav.component.html',
  styleUrl: './overview-nav.component.css',
  viewProviders: [provideIcons({ bootstrapArrowRightCircleFill })],
})
export class OverviewNavComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  @Input() back_router_link: string = '';
  @Input() next_router_link: string = '';
}
