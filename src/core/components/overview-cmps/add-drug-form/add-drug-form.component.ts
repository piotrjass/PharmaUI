import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import { SingleDrugComponent } from '../single-drug/single-drug.component';
import {
  bootstrapPatchMinusFill,
  bootstrapPatchPlusFill,
} from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'app-add-drug-form',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './add-drug-form.component.html',
  styleUrl: './add-drug-form.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
      bootstrapPatchPlusFill,
    }),
  ],
})
export class AddDrugFormComponent {}
