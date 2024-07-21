import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';

@Component({
  selector: 'app-side-effects',
  standalone: true,
  imports: [OverviewNavComponent],
  templateUrl: './side-effects.component.html',
  styleUrl: './side-effects.component.css',
})
export class SideEffectsComponent {}
