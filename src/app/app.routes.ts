import { Routes } from '@angular/router';
import { PgPrincipal } from './pg-principal/pg-principal';

export const routes: Routes = [
    { path: '', component: PgPrincipal},
  { path: '**', redirectTo: '' }
];
