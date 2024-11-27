import { Component } from '@angular/core';
import { DiseasesServiceService } from '../../../../core/services/Dieseases/dieseases-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  diseases: Observable<string[]>;
  constructor(diseaseService: DiseasesServiceService) {
    this.diseases = diseaseService.getDiseases();
  }
}
