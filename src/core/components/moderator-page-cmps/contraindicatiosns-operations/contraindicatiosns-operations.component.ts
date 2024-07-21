import { Component } from '@angular/core';
import { CrudOperationsComponent } from '../crud-operations/crud-operations.component';

@Component({
  selector: 'app-contraindicatiosns-operations',
  standalone: true,
  imports: [CrudOperationsComponent],
  templateUrl: './contraindicatiosns-operations.component.html',
  styleUrl: './contraindicatiosns-operations.component.css',
})
export class ContraindicatiosnsOperationsComponent {
  Przeciwwskazania: string[] = ['Nadciśnienie', 'Niedoczynność nerek'];
}
