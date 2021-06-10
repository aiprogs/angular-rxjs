import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SevenComponent } from './seven.component';
import { SevenRoutingModule } from './seven-routing.module';



@NgModule({
  declarations: [
    SevenComponent
  ],
  imports: [
    CommonModule,
    SevenRoutingModule
  ]
})
export class SevenModule { }
