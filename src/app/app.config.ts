import { ApplicationConfig, effect } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideToastr } from 'ngx-toastr';
import { effects, reducers } from '../store';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(reducers),
    provideEffects(effects),
    provideToastr(),
  ],
};
