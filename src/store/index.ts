import { ActionReducerMap } from '@ngrx/store';
import { patientReducer, PatientState } from './patient-store/patients.reducer';
import { PatientsEffects } from './patient-store/patients.effects';
import {
  DiseaseReducer,
  DiseaseState,
} from './diseases-store/diseases.reducer';
import { DiseasesEffects } from './diseases-store/diseases.effects';

// Define the global application state interface
export interface State {
  patients: PatientState;
  diseases: DiseaseState;
}

// Combine all reducers
export const reducers: ActionReducerMap<State> = {
  patients: patientReducer,
  diseases: DiseaseReducer,
};

// Combine all effects
export const effects = [PatientsEffects, DiseasesEffects];
