import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiControllerPage } from './api-controller.page';

const routes: Routes = [
  {
    path: '',
    component: ApiControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiControllerPageRoutingModule {}
