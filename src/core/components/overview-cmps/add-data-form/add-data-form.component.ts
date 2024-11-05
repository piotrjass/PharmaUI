import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import { bootstrapPatchPlusFill } from '@ng-icons/bootstrap-icons';
import { PatientState } from '../../../../store/patient-store/patients.reducer';
import { Store } from '@ngrx/store';
import { addDiseasesToPatientDiseasesList } from '../../../../store/patient-store/patients.actions';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-data-form',
  standalone: true,
  imports: [NgIconComponent, FormsModule],
  templateUrl: './add-data-form.component.html',
  styleUrl: './add-data-form.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
      bootstrapPatchPlusFill,
    }),
  ],
})
export class AddDataFormComponent {
  diseaseName: string = '';
  constructor(private patientStore: Store<PatientState>) {}
  addToPatientDiseasesList() {
    console.log('adding');
    console.log(this.diseaseName);
    this.patientStore.dispatch(
      addDiseasesToPatientDiseasesList({ disease: this.diseaseName }),
    );
  }
}
