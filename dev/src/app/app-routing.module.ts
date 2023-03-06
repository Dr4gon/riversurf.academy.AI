import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteUrl } from './router-url';

export const routes: Routes = [
    { path: RouteUrl.app},
    // { path: '', redirectTo: RouteUrl.app, pathMatch: 'full' }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {
}


