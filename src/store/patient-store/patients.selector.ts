import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PatientState } from './patients.reducer';

// Feature selector
export const selectPatientsDataState =
  createFeatureSelector<PatientState>('patients');

// Selector to get the list of patients
export const getPatientsDataSelector = createSelector(
  selectPatientsDataState,
  (state) => state.patients,
);
//
export const getPatientDiseasesSelector = createSelector(
  getPatientsDataSelector,
  (patient) => patient.diseases,
);
