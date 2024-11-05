import { createAction, props } from '@ngrx/store';
import { create } from 'domain';

// Action to trigger the fetching of diseases
export const getDiseasesList = createAction('[Diseases] Get Diseases List');
export const getDiseasesListSuccess = createAction(
  '[Diseases] Get Diseases List Success',
  props<{ diseases: string[] }>(),
);
export const addSelectedDiseaseToDiseasesList = createAction(
  '[Diseases] Add Selected Disease To Diseases List',
  props<{ disease: string }>(),
);
export const addSingleDiseaseToDiseasesList = createAction(
  '[Diseases] Add Single Disease To Diseases List',
  props<{ disease: string }>(),
);
export const removeSingleDiseaseToDiseasesList = createAction(
  '[Diseases] Remove Single Disease To Diseases List',
  props<{ disease: string }>(),
);
// Action to reset the diseases list
export const resetDiseasesList = createAction(
  '[Diseases] Reset Diseases List', // Fixed typo in the string label
  props<{ diseases: string[] }>(), // Use props to define the expected structure
);
