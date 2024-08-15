import { Component } from '@angular/core';

@Component({
  selector: 'app-add-drug-form',
  standalone: true,
  imports: [],
  templateUrl: './add-drug-form.component.html',
  styleUrl: './add-drug-form.component.css',
})
export class AddDrugFormComponent {
  substances: string[] = ['Paracetamolum', 'Acidum walproicum'];
}
