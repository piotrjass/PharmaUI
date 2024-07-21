import { Component } from '@angular/core';
import { CrudOperationsComponent } from '../crud-operations/crud-operations.component';

@Component({
  selector: 'app-drugs-operations',
  standalone: true,
  imports: [CrudOperationsComponent],
  templateUrl: './drugs-operations.component.html',
  styleUrl: './drugs-operations.component.css',
})
export class DrugsOperationsComponent {}
