import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'detail-items', loadChildren: () => import('./pages/detail-items/detail-items.module').then(m => m.DetailItemsModule) }, { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'cat-blog', loadChildren: () => import('./pages/cat-blog/cat-blog.module').then(m => m.CatBlogModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
