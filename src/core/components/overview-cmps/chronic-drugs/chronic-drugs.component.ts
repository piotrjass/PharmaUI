import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';

@Component({
  selector: 'app-chronic-drugs',
  standalone: true,
  imports: [OverviewNavComponent],
  templateUrl: './chronic-drugs.component.html',
  styleUrl: './chronic-drugs.component.css',
})
export class ChronicDrugsComponent {}
