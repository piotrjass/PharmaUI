import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiseasesServiceService {
  constructor() {}

  getDiseases(): Observable<string[]> {
    const diseases = [
      'Choroba serca',
      'Cukrzyca',
      'Astma',
      'Nowotwór',
      'Grypa',
    ];
    return of(diseases);
  }
}
