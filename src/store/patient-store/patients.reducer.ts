import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
} from '@ngrx/store';
import {
  FormGroupState,
  createFormGroupState,
  formGroupReducer,
  onNgrxForms,
} from 'ngrx-forms';
import { Gender } from '../../core/enums/gender_enum';

// 1. Definition for form state
export interface PatientFormValue {
  name: string;
  last_name: string;
  age: number;
  gender: Gender;
}
// 2. Initiall form state
const FORM_ID = 'PatientFormValue';
const initialFormState = createFormGroupState<PatientFormValue>(FORM_ID, {
  name: '',
  last_name: '',
  age: 0,
  gender: Gender.nie_podawać,
});

// 3. Definitions for app state
export interface PatientDataState {
  app_name: string;
  myForm: FormGroupState<PatientFormValue>;
}

const initialState: PatientDataState = {
  app_name: 'PatientsApp',
  myForm: initialFormState,
};

// selectors
export const selectPatientDataState =
  createFeatureSelector<PatientDataState>('patientData');
export const selectAppName = createSelector(
  selectPatientDataState,
  (state: PatientDataState) => state.app_name,
);

// reducers for form

export function appReducer(
  state = initialState,
  action: Action,
): PatientDataState {
  const myForm = formGroupReducer(state.myForm, action);
  if (myForm !== state.myForm) {
    state = { ...state, myForm };
  }
  switch (action.type) {
    case 'some action type':
      return state;
    default: {
      return state;
    }
  }
}

// reducer for whole items
export const reducer = createReducer(initialState, onNgrxForms());
