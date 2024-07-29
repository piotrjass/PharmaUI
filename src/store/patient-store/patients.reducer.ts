import { Action, createReducer } from '@ngrx/store';
import {
  FormGroupState,
  createFormGroupState,
  formGroupReducer,
  onNgrxForms,
} from 'ngrx-forms';

export interface PatientFormValue {
  name: string;
  last_name: string;
  age: number;
  gender: Gender;
}

const FORM_ID = 'some globally unique string';

const initialFormState = createFormGroupState<PatientFormValue>(FORM_ID, {
  name: '',
  last_name: '',
  age: 0,
  gender: Gender.nie_podawać,
});

export interface AppState {
  someOtherField: string;
  myForm: FormGroupState<PatientFormValue>;
}

const initialState: AppState = {
  someOtherField: '',
  myForm: initialFormState,
};

export const appReducer = createReducer(
  initialState,
  onNgrxForms(),
  // your other reducers...
);
