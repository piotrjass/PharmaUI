import { Component } from '@angular/core';

@Component({
  selector: 'app-add-substance-form',
  standalone: true,
  imports: [],
  templateUrl: './add-substance-form.component.html',
  styleUrl: './add-substance-form.component.css',
})
export class AddSubstanceFormComponent {
  contraindications: string[] = ['Nadciśnienie', 'Cukrzyca'];
  side_effects: string[] = ['Wymioty', 'Ból głowy'];
}
