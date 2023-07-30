import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailItemsComponent } from './detail-items.component';

const routes: Routes = [{ path: '', component: DetailItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class DetailItemsRoutingModule { }
