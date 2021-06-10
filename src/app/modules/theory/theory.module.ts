import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheoryRoutingModule } from './theory-routing.module';
import { TheoryComponent } from './theory.component';


@NgModule({
  declarations: [
    TheoryComponent
  ],
  imports: [
    CommonModule,
    TheoryRoutingModule
  ]
})
export class TheoryModule { }
