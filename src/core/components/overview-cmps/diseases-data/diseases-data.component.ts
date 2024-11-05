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
import { DiseaseState } from '../../../../store/diseases-store/diseases.reducer';
import { Store } from '@ngrx/store';
import { getDiseasesList } from '../../../../store/diseases-store/diseases.actions';
import { getLoadedDiseasesList } from '../../../../store/diseases-store/diseases.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diseases-data',
  standalone: true,
  imports: [
    OverviewNavComponent,
    SingleDiseaseComponent,
    NgIconComponent,
    AddDataFormComponent,
    CommonModule,
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
  diseases$: Observable<string[]>;

  // diseases: string[] = [
  //   'Niedokrwistość hemolityczna',
  //   'Nadciśnienie tętniczne pierwotne',
  // ];

  constructor(private diseasesStore: Store<DiseaseState>) {
    this.diseases$ = this.diseasesStore.select(getLoadedDiseasesList);
  }

  ngOnInit() {
    this.getDiseasesList();
  }

  getDiseasesList() {
    console.log('pobieram liste');
    this.diseasesStore.dispatch(getDiseasesList()); // Dispatch action
  }
}
