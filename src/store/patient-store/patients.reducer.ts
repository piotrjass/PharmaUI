import { Action, createReducer } from '@ngrx/store';
import {
  FormGroupState,
  createFormGroupState,
  formGroupReducer,
  onNgrxForms,
} from 'ngrx-forms';
import { Gender } from '../../core/enums/gender_enum';

// 1. Definicja modelu danych formularza
export interface PatientFormValue {
  name: string;
  last_name: string;
  age: number;
  gender: Gender;
}
// 2. Początkowy stan formularza
const FORM_ID = 'PatientFormValue';
const initialFormState = createFormGroupState<PatientFormValue>(FORM_ID, {
  name: '',
  last_name: '',
  age: 0,
  gender: Gender.nie_podawać,
});

// 3. Definicja stanu aplikacji
export interface PatientDataState {
  someOtherField: string;
  myForm: FormGroupState<PatientFormValue>;
}

const initialState: PatientDataState = {
  someOtherField: '',
  myForm: initialFormState,
};

// 4. Reducer zwiazany a formularzem
export function patientFormReducer(
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

export function reducer(state: PatientDataState | undefined, action: Action) {
  return patientFormReducer(state, action);
}
