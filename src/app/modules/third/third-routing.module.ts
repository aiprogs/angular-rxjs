import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdComponent } from './third.component';
import { RouteInterface } from '../../core/utils/route-manager/all.interface';

const routes: RouteInterface[] = [
  {
    path: '',
    component: ThirdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdRoutingModule { }
