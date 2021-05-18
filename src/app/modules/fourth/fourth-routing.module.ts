import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthComponent } from './fourth.component';
import { RouteInterface } from '../../core/utils/route-manager/all.interface';

const routes: RouteInterface[] = [
  {
    path: '',
    component: FourthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthRoutingModule { }
