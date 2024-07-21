import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';

@Component({
  selector: 'app-otc-drugs',
  standalone: true,
  imports: [OverviewNavComponent],
  templateUrl: './otc-drugs.component.html',
  styleUrl: './otc-drugs.component.css',
})
export class OtcDrugsComponent {}
