import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapXCircle,
  bootstrapXCircleFill,
} from '@ng-icons/bootstrap-icons';
import {
  bootstrapPatchMinusFill,
  bootstrapPatchPlusFill,
} from '@ng-icons/bootstrap-icons';
import { PatientState } from '../../../../store/patient-store/patients.reducer';
import { Store } from '@ngrx/store';
import { removeDiseasesToPatientDiseasesList } from '../../../../store/patient-store/patients.actions';
@Component({
  selector: 'app-single-disease',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './single-disease.component.html',
  styleUrl: './single-disease.component.css',
  viewProviders: [
    provideIcons({
      bootstrapXCircle,
      bootstrapXCircleFill,
      bootstrapPatchMinusFill,
      bootstrapPatchPlusFill,
    }),
  ],
})
export class SingleDiseaseComponent {
  @Input() name: string = 'Drug name';
  @Input() index: number = 0;
  //
  @Output() removeDisease = new EventEmitter<string>();
  remove() {
    this.removeDisease.emit(this.name);
  }
}
