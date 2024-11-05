import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PatientState } from './patients.reducer';

// Feature selector
export const selectPatientsDataState =
  createFeatureSelector<PatientState>('patients');

// Selector to get the list of patients
export const getPatientsData = createSelector(
  selectPatientsDataState,
  (state) => state.patients,
);
