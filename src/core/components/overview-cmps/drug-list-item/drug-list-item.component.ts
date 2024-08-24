import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drug-list-item',
  standalone: true,
  imports: [],
  templateUrl: './drug-list-item.component.html',
  styleUrl: './drug-list-item.component.css',
})
export class DrugListItemComponent {
  @Input() name: string = '';
  @Input() index: number = 0;
  @Input() substances?: any[] = [
    {
      substance: '',
      dosage: 0,
    },
  ];
}
