import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { SingleDiseaseComponent } from '../single-disease/single-disease.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import {
  bootstrapPatchMinusFill,
  bootstrapPatchPlusFill,
} from '@ng-icons/bootstrap-icons';
import { AddDataFormComponent } from '../add-data-form/add-data-form.component';
@Component({
  selector: 'app-diseases-data',
  standalone: true,
  imports: [
    OverviewNavComponent,
    SingleDiseaseComponent,
    NgIconComponent,
    AddDataFormComponent,
  ],
  templateUrl: './diseases-data.component.html',
  styleUrl: './diseases-data.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
      bootstrapPatchPlusFill,
      bootstrapPatchMinusFill,
    }),
  ],
})
export class DiseasesDataComponent {
  diseases: string[] = [
    'Niedokrwistość hemolityczna',
    'Nadciśnienie tętniczne pierwotne',
  ];
}
