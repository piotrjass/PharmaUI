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
import {
  Patient,
  PatientState,
} from '../../../../store/patient-store/patients.reducer';
import {
  addDiseasesToPatientDiseasesList,
  removeDiseasesToPatientDiseasesList,
} from '../../../../store/patient-store/patients.actions';
import { getPatientDiseasesSelector } from '../../../../store/patient-store/patients.selector';

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
  patientDiseases$: Observable<string[]>;
  selectedDisease: string = '';
  // patientsDiseases: Observable<string[]>;

  constructor(
    private diseasesStore: Store<DiseaseState>,
    private patientStore: Store<PatientState>,
  ) {
    this.diseases$ = this.diseasesStore.select(getLoadedDiseasesList);
    this.patientDiseases$ = this.patientStore.select(
      getPatientDiseasesSelector,
    );
    this.diseases$.subscribe((list) => (this.selectedDisease = list[0]));
  }

  onDiseaseSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedDisease = target.value;
  }

  ngOnInit() {
    this.getDiseasesList();
  }

  getDiseasesList() {
    this.diseasesStore.dispatch(getDiseasesList()); // Dispatch action
  }

  addToPatientDiseasesList(disease: string) {
    if (disease) {
      this.patientStore.dispatch(addDiseasesToPatientDiseasesList({ disease }));
    } else {
      console.warn('No disease selected!');
    }
  }

  removeItemForList(disease: string) {
    this.patientStore.dispatch(
      removeDiseasesToPatientDiseasesList({ disease: disease }),
    );
  }
}
