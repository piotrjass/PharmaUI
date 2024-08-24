import { Component } from '@angular/core';
import { DrugListItemComponent } from '../drug-list-item/drug-list-item.component';

@Component({
  selector: 'app-overview-summary',
  standalone: true,
  imports: [DrugListItemComponent],
  templateUrl: './overview-summary.component.html',
  styleUrl: './overview-summary.component.css',
})
export class OverviewSummaryComponent {}
