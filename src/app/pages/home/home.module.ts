import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PayComponent } from 'src/app/components/pay/pay.component';


@NgModule({
  declarations: [
    HomeComponent,
    PayComponent,
  ],
  imports: [
    // CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeModule { }
