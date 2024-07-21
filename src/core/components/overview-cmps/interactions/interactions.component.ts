import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';

@Component({
  selector: 'app-interactions',
  standalone: true,
  imports: [OverviewNavComponent],
  templateUrl: './interactions.component.html',
  styleUrl: './interactions.component.css',
})
export class InteractionsComponent {}
