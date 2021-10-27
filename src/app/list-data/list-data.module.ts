import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDataRoutingModule } from './list-data-routing.module';
import { ListDataComponent } from './list-data.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListDataComponent
  ],
  imports: [
    CommonModule,
    ListDataRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class ListDataModule { }
