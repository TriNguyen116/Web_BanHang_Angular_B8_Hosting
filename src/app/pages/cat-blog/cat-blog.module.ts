import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatBlogRoutingModule } from './cat-blog-routing.module';
import { CatBlogComponent } from './cat-blog.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CardCatComponent } from './components/card-cat/card-cat.component';


@NgModule({
  declarations: [
    CatBlogComponent,
    CardCatComponent,
    
  ],
  imports: [
    CommonModule,
    CatBlogRoutingModule,
    SharedModule
  ]
})
export class CatBlogModule { }
