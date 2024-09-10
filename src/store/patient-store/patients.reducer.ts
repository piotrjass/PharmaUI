import { createReducer, createSelector, on } from '@ngrx/store';
import { resetPatientData } from './patients.actions';

export interface Patient {
  age: number;
  name: string;
  last_name: string;
}

export interface PatientState {
  patient: Patient;
}

export const initialPatientState: PatientState = {
  patient: {
    age: 0,
    name: 'Adam',
    last_name: 'Smith',
  },
};

// selectors
export const selectPatient = (state: PatientState) => state.patient;
export const selectPatientData = createSelector(
  selectPatient,
  (patient: Patient) => patient,
);

export const patientReducer = createReducer(
  initialPatientState, // Initial state
  on(resetPatientData, () => initialPatientState), // Reset state to initial state on reset action
);
