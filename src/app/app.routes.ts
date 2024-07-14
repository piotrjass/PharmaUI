import { Routes } from '@angular/router';
//
import { LandingPageComponent } from '../shared/pages/landing-page/landing-page.component';
import { LoginPageComponent } from '../shared/pages/login-page/login-page.component';
import { HelloPageComponent } from '../shared/pages/hello-page/hello-page.component';
import { MainMenuPageComponent } from '../shared/pages/main-menu-page/main-menu-page.component';
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
];
