import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { RouterLink } from '@angular/router';
// store
import { NgrxFormsModule } from 'ngrx-forms';
// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowRightCircleFill,
  bootstrapArrowLeftCircleFill,
} from '@ng-icons/bootstrap-icons';

import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  Patient,
  PatientState,
} from '../../../../store/patient-store/patients.reducer';
import { getPatientsDataSelector } from '../../../../store/patient-store/patients.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patients-data',
  standalone: true,
  imports: [
    NgIconComponent,
    OverviewNavComponent,
    RouterLink,
    NgrxFormsModule,
    CommonModule,
  ],
  templateUrl: './patients-data.component.html',
  styleUrl: './patients-data.component.css',
  viewProviders: [
    provideIcons({
      bootstrapArrowRightCircleFill,
      bootstrapArrowLeftCircleFill,
    }),
  ],
})
export class PatientsDataComponent {
  patientsData$: Observable<Patient>;
  constructor(private patientStore: Store<PatientState>) {
    this.patientsData$ = this.patientStore.select(getPatientsDataSelector);
  }
}
