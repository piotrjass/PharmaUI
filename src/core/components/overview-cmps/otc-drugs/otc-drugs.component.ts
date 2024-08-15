import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import { SingleDrugComponent } from '../single-drug/single-drug.component';

@Component({
  selector: 'app-otc-drugs',
  standalone: true,
  imports: [OverviewNavComponent, NgIconComponent, SingleDrugComponent],
  templateUrl: './otc-drugs.component.html',
  styleUrl: './otc-drugs.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
    }),
  ],
})
export class OtcDrugsComponent {
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
  ];
}
