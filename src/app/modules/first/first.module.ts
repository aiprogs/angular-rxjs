import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { BeatService } from '../../core/services/beat.service';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ],
  providers: [
    BeatService
  ]
})
export class FirstModule { }
