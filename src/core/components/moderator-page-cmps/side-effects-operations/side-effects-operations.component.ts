import { Component } from '@angular/core';
import { CrudOperationsComponent } from '../crud-operations/crud-operations.component';

@Component({
  selector: 'app-side-effects-operations',
  standalone: true,
  imports: [CrudOperationsComponent],
  templateUrl: './side-effects-operations.component.html',
  styleUrl: './side-effects-operations.component.css',
})
export class SideEffectsOperationsComponent {
  dzialania: string[] = ['Biegunka', 'Zaparcie'];
}
