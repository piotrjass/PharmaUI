import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapXCircle,
  bootstrapXCircleFill,
} from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'app-single-disease',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './single-disease.component.html',
  styleUrl: './single-disease.component.css',
  viewProviders: [provideIcons({ bootstrapXCircle, bootstrapXCircleFill })],
})
export class SingleDiseaseComponent {
  @Input() name: string = 'Drug name';
}
