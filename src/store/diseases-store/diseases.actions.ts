import { createAction, props } from '@ngrx/store';

// Action to trigger the fetching of diseases
export const getDiseasesList = createAction('[Diseases] Get Diseases List');

// Action dispatched on successful retrieval of diseases
export const getDiseasesListSuccess = createAction(
  '[Diseases] Get Diseases List Success',
  props<{ diseases: string[] }>(),
);

// Action to reset the diseases list
export const resetDiseasesList = createAction(
  '[Diseases] Reset Diseases List', // Fixed typo in the string label
  props<{ diseases: string[] }>(), // Use props to define the expected structure
);
