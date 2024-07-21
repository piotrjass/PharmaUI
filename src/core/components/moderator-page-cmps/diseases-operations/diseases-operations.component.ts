import { Component } from '@angular/core';
import { CrudOperationsComponent } from '../crud-operations/crud-operations.component';

@Component({
  selector: 'app-diseases-operations',
  standalone: true,
  imports: [CrudOperationsComponent],
  templateUrl: './diseases-operations.component.html',
  styleUrl: './diseases-operations.component.css',
})
export class DiseasesOperationsComponent {
  choroby: string[] = [
    'Nadciśnienie tętniczne pierwotne',
    'Nadciśnienie tętniczne wtórne',
  ];
}
