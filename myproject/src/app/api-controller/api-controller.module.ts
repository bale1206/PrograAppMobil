import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiControllerPageRoutingModule } from './api-controller-routing.module';

import { ApiControllerPage } from './api-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiControllerPageRoutingModule
  ],
  declarations: [ApiControllerPage]
})
export class ApiControllerPageModule {}
