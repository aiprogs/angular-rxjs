import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheoryRoutingModule } from './theory-routing.module';
import { TheoryComponent } from './theory.component';
import { TheoryService } from './theory.service';


@NgModule({
  declarations: [
    TheoryComponent
  ],
  imports: [
    CommonModule,
    TheoryRoutingModule
  ],
  providers: [
    TheoryService
  ]
})
export class TheoryModule {
}
