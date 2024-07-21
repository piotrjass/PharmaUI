import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { SingleDiseaseComponent } from '../single-disease/single-disease.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'app-diseases-data',
  standalone: true,
  imports: [OverviewNavComponent, SingleDiseaseComponent, NgIconComponent],
  templateUrl: './diseases-data.component.html',
  styleUrl: './diseases-data.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
    }),
  ],
})
export class DiseasesDataComponent {
  diseases: string[] = [
    'Niedokrwistość hemolityczna',
    'Nadciśnienie tętniczne pierwotne',
  ];
}
