import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DiseasesServiceService } from '../../core/services/Dieseases/dieseases-service.service';
import {
  getDiseasesList,
  getDiseasesListSuccess,
  resetDiseasesList,
} from './diseases.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiseasesEffects {
  constructor(
    private actions$: Actions,
    private diseasesService: DiseasesServiceService,
  ) {}

  loadDiseasesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDiseasesList),
      mergeMap(() =>
        this.diseasesService.getDiseases().pipe(
          map((diseases) => {
            console.log('Fetched diseases from service:', diseases); // Log fetched diseases
            return getDiseasesListSuccess({ diseases }); // Pass diseases to the success action
          }),
          catchError((error) => {
            console.error('Error fetching diseases:', error); // Log the error
            return of(getDiseasesListSuccess({ diseases: [] })); // Handle errors by returning an empty array
          }),
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
