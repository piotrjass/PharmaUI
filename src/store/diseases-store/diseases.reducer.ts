import { createReducer, createSelector, on } from '@ngrx/store';
import { getDiseasesListSuccess, resetDiseasesList } from './diseases.actions';

export interface DiseaseState {
  Diseases: string[];
}

// initial state
export const initialDiseaseState: DiseaseState = {
  Diseases: [],
};

// reducer function
export const DiseaseReducer = createReducer(
  initialDiseaseState, // Initial state
  //
  on(getDiseasesListSuccess, (state, { diseases }) => {
    console.log('reducer list success');
    console.log('Diseases fetched successfully:', diseases); // Log the fetched diseases
    return {
      ...state,
      Diseases: diseases, // Update the diseases state with the new list
    };
  }),
  //
  on(resetDiseasesList, () => initialDiseaseState),
  // Reset state to initial state on reset action
);
