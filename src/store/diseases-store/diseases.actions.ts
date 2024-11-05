import { createAction } from '@ngrx/store';

export const getDiseasesList = createAction('[Diseasees] Get Diseasees List');
export const getDiseasesListSuccess = createAction(
  '[Diseasees] Get Diseasees List Success',
);
export const resetDiseasesList = createAction(
  '[Diseasees] Reset Diseasees List',
  (diseases: string[]) => ({ diseases }),
);
