import { Component } from '@angular/core';
import { CrudOperationsComponent } from '../crud-operations/crud-operations.component';

@Component({
  selector: 'app-contraindicatiosns-operations',
  standalone: true,
  imports: [CrudOperationsComponent],
  templateUrl: './contraindications-operations.component.html',
  styleUrl: './contraindications-operations.component.css',
})
export class ContraindicatiosnsOperationsComponent {
  Przeciwwskazania: string[] = ['Nadciśnienie', 'Niedoczynność nerek'];
  handleAddItem(item: string) {
    console.log('Added item:', item);
  }
}
