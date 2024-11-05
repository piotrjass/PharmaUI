import { ActionReducerMap } from '@ngrx/store';
import { patientReducer, PatientState } from './patient-store/patients.reducer';
import { PatientsEffects } from './patient-store/patients.effects';

// Define the global application state interface
export interface State {
  patients: PatientState;
}

// Combine all reducers
export const reducers: ActionReducerMap<State> = {
  patients: patientReducer,
};

// Combine all effects
export const effects = [PatientsEffects];
