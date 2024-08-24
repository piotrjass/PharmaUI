import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { SingleInteractionComponent } from '../single-interaction/single-interaction.component';

@Component({
  selector: 'app-interactions',
  standalone: true,
  imports: [OverviewNavComponent, SingleInteractionComponent],
  templateUrl: './interactions.component.html',
  styleUrl: './interactions.component.css',
})
export class InteractionsComponent {}
