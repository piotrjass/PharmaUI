import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapPatchMinusFill,
  bootstrapPatchPlusFill,
} from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'app-single-drug',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './single-drug.component.html',
  styleUrl: './single-drug.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPatchPlusFill,
      bootstrapPatchMinusFill,
    }),
  ],
})
export class SingleDrugComponent {
  @Input() name: string = '';
  @Input() index: number = 0;
  @Input() substances?: any[] = [
    {
      substance: '',
      dosage: 0,
    },
  ];
}
