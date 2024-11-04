import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import { SingleDrugComponent } from '../single-drug/single-drug.component';
import {
  bootstrapPatchMinusFill,
  bootstrapPatchPlusFill,
} from '@ng-icons/bootstrap-icons';
import { AddDrugFormComponent } from '../add-drug-form/add-drug-form.component';
@Component({
  selector: 'app-chronic-drugs',
  standalone: true,
  imports: [
    OverviewNavComponent,
    NgIconComponent,
    SingleDrugComponent,
    AddDrugFormComponent,
  ],
  templateUrl: './chronic-drugs.component.html',
  styleUrl: './chronic-drugs.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
      bootstrapPatchPlusFill,
    }),
  ],
})
export class ChronicDrugsComponent {
  drugs: any[] = [
    {
      name: 'Apap Extra',
      substances: [
        {
          substance: 'Paracetamolum',
          dosage: 500,
        },
        {
          substance: 'Coffeinum',
          dosage: 50,
        },
      ],
    },
    {
      name: 'Infex zatoki',
      substances: [
        {
          substance: 'Ibuprofenum',
          dosage: 200,
        },
        {
          substance: 'Pseudoephedrinum',
          dosage: 30,
        },
      ],
    },
    {
      name: 'Infex zatoki',
      substances: [
        {
          substance: 'Ibuprofenum',
          dosage: 200,
        },
        {
          substance: 'Pseudoephedrinum',
          dosage: 30,
        },
      ],
    },
    {
      name: 'Infex zatoki',
      substances: [
        {
          substance: 'Ibuprofenum',
          dosage: 200,
        },
        {
          substance: 'Pseudoephedrinum',
          dosage: 30,
        },
      ],
    },
    {
      name: 'Infex zatoki',
      substances: [
        {
          substance: 'Ibuprofenum',
          dosage: 200,
        },
        {
          substance: 'Pseudoephedrinum',
          dosage: 30,
        },
      ],
    },
  ];
}
