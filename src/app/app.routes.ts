import { Routes } from '@angular/router';
//
import { LandingPageComponent } from '../shared/pages/landing-page/landing-page.component';
import { LoginPageComponent } from '../shared/pages/login-page/login-page.component';
import { HelloPageComponent } from '../shared/pages/hello-page/hello-page.component';
import { MainMenuPageComponent } from '../shared/pages/main-menu-page/main-menu-page.component';
import { OverviewPageComponent } from '../shared/pages/overview-page/overview-page.component';
import { DurgsBasePageComponent } from '../shared/pages/durgs-base-page/durgs-base-page.component';
import { PatientsDataComponent } from '../core/components/overview-cmps/patients-data/patients-data.component';
import { DiseasesDataComponent } from '../core/components/overview-cmps/diseases-data/diseases-data.component';
import { ChronicDrugsComponent } from '../core/components/overview-cmps/chronic-drugs/chronic-drugs.component';
import { OtcDrugsComponent } from '../core/components/overview-cmps/otc-drugs/otc-drugs.component';
import { SideEffectsComponent } from '../core/components/overview-cmps/side-effects/side-effects.component';
import { InteractionsComponent } from '../core/components/overview-cmps/interactions/interactions.component';
import { ReportErrorPageComponent } from '../shared/pages/report-error-page/report-error-page.component';
import { ModeratorPageComponent } from '../shared/pages/moderator-page/moderator-page.component';
//
export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'Home',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Home',
  },
  {
    path: 'hello',
    component: HelloPageComponent,
    title: 'Home',
  },
  {
    path: 'main-menu',
    component: MainMenuPageComponent,
    title: 'Choose resource',
  },
  {
    path: 'overview',
    component: OverviewPageComponent,
    title: 'Overview',
    children: [
      {
        path: 'patient-data',
        component: PatientsDataComponent,
        title: 'Patients data',
      },

      {
        path: 'patient-diseases',
        component: DiseasesDataComponent,
        title: 'Diseases data',
      },

      {
        path: 'chronic-drugs',
        component: ChronicDrugsComponent,
        title: 'Chronic diseases',
      },

      {
        path: 'otc-drugs',
        component: OtcDrugsComponent,
        title: 'OTC drugs',
      },

      {
        path: 'side-effects',
        component: SideEffectsComponent,
        title: 'Side effects',
      },
      {
        path: 'interactions',
        component: InteractionsComponent,
        title: 'Interactions',
      },
    ],
  },
  {
    path: 'drugs-base',
    component: DurgsBasePageComponent,
    title: 'Drugs base',
  },
  {
    path: 'report-error',
    component: ReportErrorPageComponent,
    title: 'Report error',
  },
  {
    path: 'moderator-page',
    component: ModeratorPageComponent,
    title: 'Moderator page',
  },
];
