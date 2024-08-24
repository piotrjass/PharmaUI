import { Component } from '@angular/core';
import { AddDataFormComponent } from '../add-data-form/add-data-form.component';
import { BaseListItemComponent } from '../../../../shared/component/base-list-item/base-list-item.component';

@Component({
  selector: 'app-overview-recommendations',
  standalone: true,
  imports: [AddDataFormComponent, BaseListItemComponent],
  templateUrl: './overview-recommendations.component.html',
  styleUrl: './overview-recommendations.component.css',
})
export class OverviewRecommendationsComponent {
  recommendations: string[] = [
    'Suplementacja B12 przy stosowaniu metforminy',
    'Suplementacja Koenzymu Q10 przy statynach',
  ];
}
