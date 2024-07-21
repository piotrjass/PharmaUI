import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';

@Component({
  selector: 'app-diseases-data',
  standalone: true,
  imports: [OverviewNavComponent],
  templateUrl: './diseases-data.component.html',
  styleUrl: './diseases-data.component.css',
})
export class DiseasesDataComponent {}
