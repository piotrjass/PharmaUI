import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-drug',
  standalone: true,
  imports: [],
  templateUrl: './single-drug.component.html',
  styleUrl: './single-drug.component.css',
})
export class SingleDrugComponent {
  @Input() name: string = '';
  @Input() index: number = 0;
  @Input() substances: any[] = [
    {
      substance: '',
      dosage: 0,
    },
  ];
}