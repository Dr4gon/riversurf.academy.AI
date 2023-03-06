import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteUrl } from './router-url';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: RouteUrl.app, component: AppComponent },
  { path: '', redirectTo: RouteUrl.app, pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {
}


