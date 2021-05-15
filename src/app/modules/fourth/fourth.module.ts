import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourthRoutingModule } from './fourth-routing.module';
import { FourthComponent } from './fourth.component';


@NgModule({
  declarations: [
    FourthComponent
  ],
  imports: [
    CommonModule,
    FourthRoutingModule
  ]
})
export class FourthModule { }
