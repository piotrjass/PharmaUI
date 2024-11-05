import { Injectable } from '@angular/core';

import { DiseasesServiceService } from '../../core/services/Dieseases/dieseases-service.service';
import {
  getDiseasesList,
  getDiseasesListSuccess,
  resetDiseasesList,
} from './diseases.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Actions } from 'ngrx-forms';
@Injectable({
  providedIn: 'root',
})
export class DiseasesEffects {
  constructor(
    private actions$: Actions,
    private diseasesSerivce: DiseasesServiceService,
  ) {}
  loadDiseasesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDiseasesList),
      mergeMap(() =>
        this.diseasesSerivce.getDiseases().pipe(
          // Use getDiseases instead of getDiseasesList
          map((diseases) => getDiseasesListSuccess({ diseases })), // Pass diseases to the success action
          catchError(() => of(getDiseasesListSuccess({ diseases: [] }))), // Handle errors by returning an empty array
        ),
      ),
    ),
  );

  resetDiseasesList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(resetDiseasesList),
        map((action) => {
          console.log('Resetting diseases list:', action.diseases);
        }),
      ),
    { dispatch: false }, // This effect does not dispatch any new action
  );
}
