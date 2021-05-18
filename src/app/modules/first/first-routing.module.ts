import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first.component';
import { RouteInterface } from '../../core/utils/route-manager/all.interface';

export const firstRoutes: RouteInterface[] = [
  {
    path: '',
    component: FirstComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(firstRoutes)],
  exports: [RouterModule]
})
export class FirstRoutingModule {
}
