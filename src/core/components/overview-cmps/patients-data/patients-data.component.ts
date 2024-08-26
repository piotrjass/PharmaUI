import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
// store
import { Store, StoreModule } from '@ngrx/store';
import { FormGroupState, NgrxFormsModule, setValue } from 'ngrx-forms';
// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowRightCircleFill,
  bootstrapArrowLeftCircleFill,
} from '@ng-icons/bootstrap-icons';
import { Observable } from 'rxjs';
import {
  PatientDataState,
  PatientFormValue,
} from '../../../../store/patient-store/patients.reducer';

@Component({
  selector: 'app-patients-data',
  standalone: true,
  imports: [
    NgIconComponent,
    OverviewNavComponent,
    RouterLink,
    NgrxFormsModule,
    StoreModule,
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
  formState$: Observable<FormGroupState<PatientFormValue>>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<PatientDataState>,
  ) {
    this.formState$ = store.select((s) => s.myForm);
  }

  // updateFormValue(newValue: PatientFormValue) {
  //   this.store.dispatch(setValue({ value: newValue }));
  // }
}
