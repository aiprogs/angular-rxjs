import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthComponent } from './fifth.component';
import { RouteInterface } from '../../core/utils/route-manager/all.interface';

const routes: RouteInterface[] = [
  {
    path: '',
    component: FifthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FifthRoutingModule {
}
