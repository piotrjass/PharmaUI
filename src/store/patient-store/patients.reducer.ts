import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { resetPatientData } from './patients.actions';

export interface Patient {
  name: string;
  age: number;
}
export interface PatientState {
  patient: Patient | null;
}

export const initialState: PatientState = {
  patient: null,
};

// selectors
export const selectPatient = createSelector(
  PatientState,
  (state: PatientState) => state.patient,
);

// reducers
export const patientReducer = createReducer(
  initialState,
  on(resetPatientData, (state) => ({
    ...state,
    patient: null,
  })),
);

export function reducer(state: PatientState | undefined, action: Action) {
  return patientReducer(state, action);
}
