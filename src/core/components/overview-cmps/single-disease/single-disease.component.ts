import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapXCircle,
  bootstrapXCircleFill,
} from '@ng-icons/bootstrap-icons';
import {
  bootstrapPatchMinusFill,
  bootstrapPatchPlusFill,
} from '@ng-icons/bootstrap-icons';
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
}
