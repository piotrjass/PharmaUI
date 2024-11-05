import { createReducer, createSelector, on } from '@ngrx/store';
import {
  addDiseasesToPatientDiseasesList,
  getPatientData,
  resetPatientData,
} from './patients.actions';

// models
export interface Patient {
  age: number;
  name: string;
  last_name: string;
  diseases: string[];
}

export interface PatientState {
  patients: Patient;
}

// initial state
export const initialPatientState: PatientState = {
  patients: {
    age: 30,
    name: 'Adam',
    last_name: 'Smith',
    diseases: [],
  },
};

// reducer function
export const patientReducer = createReducer(
  initialPatientState, // Initial state
  //
  on(addDiseasesToPatientDiseasesList, (state, { disease }) => ({
    ...state,
    patients: {
      ...state.patients,
      diseases: [...state.patients.diseases, disease], // Add the new disease to the list
    },
  })),
  //
  on(resetPatientData, () => initialPatientState),
  // Reset state to initial state on reset action
);
