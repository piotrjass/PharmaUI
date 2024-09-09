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
  // app_name: string = '';
  // formState$: Observable<FormGroupState<PatientFormValue>>;
  // constructor(patientStore: Store<PatientDataState>) {
  //   this.formState$ = patientStore.select((s) => s.myForm);
  //   patientStore.select(selectAppName).subscribe((name) => {
  //     this.app_name = name;
  //     alert('stop!');
  //     console.log(this.app_name);
  //   });
  // }
  // ngOnInit() {
  //   console.log('on init sie wykonuje!');
  //   console.log(this.app_name);
  //   this.formState$.subscribe((el) => console.log(el));
  // }
}
