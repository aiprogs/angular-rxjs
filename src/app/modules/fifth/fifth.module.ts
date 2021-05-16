import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FifthRoutingModule } from './fifth-routing.module';
import { FifthComponent } from './fifth.component';


@NgModule({
  declarations: [
    FifthComponent
  ],
  imports: [
    CommonModule,
    FifthRoutingModule
  ]
})
export class FifthModule { }
