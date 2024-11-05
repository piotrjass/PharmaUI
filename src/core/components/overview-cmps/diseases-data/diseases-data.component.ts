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
import { DiseasesServiceService } from '../../../services/Dieseases/dieseases-service.service';
import { DiseaseState } from '../../../../store/diseases-store/diseases.reducer';
import { Store } from '@ngrx/store';
import { getDiseasesList } from '../../../../store/diseases-store/diseases.selector';
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
  constructor(private diseasesStore: Store<DiseaseState>) {
    this.diseasesStore
      .select(getDiseasesList)
      .subscribe((el) => console.log(el));
  }

  diseases: string[] = [
    'Niedokrwistość hemolityczna',
    'Nadciśnienie tętniczne pierwotne',
  ];
}
