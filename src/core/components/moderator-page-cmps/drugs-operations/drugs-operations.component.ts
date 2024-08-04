import { Component, Output, EventEmitter } from '@angular/core';
import { CrudOperationsComponent } from '../crud-operations/crud-operations.component';
import { AddDrugFormComponent } from '../add-drug-form/add-drug-form.component';
import { AddSubstanceFormComponent } from '../add-substance-form/add-substance-form.component';

@Component({
  selector: 'app-drugs-operations',
  standalone: true,
  imports: [
    CrudOperationsComponent,
    AddDrugFormComponent,
    AddSubstanceFormComponent,
  ],
  templateUrl: './drugs-operations.component.html',
  styleUrl: './drugs-operations.component.css',
})
export class DrugsOperationsComponent {
  leki: string[] = ['Apap extra', 'Infex zatoki'];
}
