import { createAction, props } from '@ngrx/store';

export const getPatientData = createAction('[Patient] Get Patient Data');
// adding
export const addDiseasesToPatientDiseasesList = createAction(
  '[Patient] Add Diseases To Patient Diseases List',
  props<{ disease: string }>(),
);
// removing
export const removeDiseasesToPatientDiseasesList = createAction(
  '[Patient] Remove Disease From Patient Diseases List',
  props<{ disease: string }>(),
);
// reseting
export const resetPatientData = createAction('[Patient] Reset Patient Data');
