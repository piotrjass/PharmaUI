import { createReducer, createSelector, on } from '@ngrx/store';
import { resetDiseasesList } from './diseases.actions';

// models
export interface Disease {
  name: string;
}

export interface DiseaseState {
  Diseases: Disease[];
}

// initial state
export const initialDiseaseState: DiseaseState = {
  Diseases: [{ name: 'Choroba1' }],
};

// reducer function
export const DiseaseReducer = createReducer(
  initialDiseaseState, // Initial state
  on(resetDiseasesList, () => initialDiseaseState),
  // Reset state to initial state on reset action
);
