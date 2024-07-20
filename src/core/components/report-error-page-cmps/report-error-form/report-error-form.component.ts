import { Component } from '@angular/core';

@Component({
  selector: 'app-report-error-form',
  standalone: true,
  imports: [],
  templateUrl: './report-error-form.component.html',
  styleUrl: './report-error-form.component.css',
})
export class ReportErrorFormComponent {
  modules: string[] = [
    'Przegląd lekowy',
    'Archiwum',
    'Baza przeglądów',
    'Forum',
    'Baza leków',
    'Edukacja',
  ];
}
