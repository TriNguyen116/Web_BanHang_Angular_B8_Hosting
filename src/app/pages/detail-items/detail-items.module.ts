import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { DetailItemsRoutingModule } from './detail-items-routing.module';
import { DetailItemsComponent } from './detail-items.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    DetailItemsComponent,
  ],
  imports: [
    // CommonModule,
    DetailItemsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DetailItemsModule { }
