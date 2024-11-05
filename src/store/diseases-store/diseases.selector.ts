import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DiseaseState } from './diseases.reducer';

// Feature selector
export const selectDiseasesState =
  createFeatureSelector<DiseaseState>('diseases');

// Selector to get the list of diseases
export const getLoadedDiseasesList = createSelector(
  selectDiseasesState,
  (state) => state.Diseases,
);
