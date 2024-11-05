import { createReducer, createSelector, on } from '@ngrx/store';
import { getPatientData, resetPatientData } from './patients.actions';

// models
export interface Patient {
  age: number;
  name: string;
  last_name: string;
}

export interface PatientState {
  patients: Patient[];
}

// initial state
export const initialPatientState: PatientState = {
  patients: [
    {
      age: 30,
      name: 'Adam',
      last_name: 'Smith',
    },
    {
      age: 25,
      name: 'Eve',
      last_name: 'Johnson',
    },
  ],
};

// reducer function
export const patientReducer = createReducer(
  initialPatientState, // Initial state
  on(resetPatientData, () => initialPatientState),
  // Reset state to initial state on reset action
);
