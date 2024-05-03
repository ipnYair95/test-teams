import { Routes } from '@angular/router';
import { RedirectComponent } from '../pages/redirect/redirect.component';

export const routes: Routes = [
    {
        path: 'redirect',
        component: RedirectComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'redirect'
    }
];
