import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedRoute, NamedRouterModule } from '../../core/utils/named-route/named-router.module';
import { SecondComponent } from './second.component';
import { RouteInterface } from '../../core/utils/route-manager/all.interface';

export const enum SecondNamedRoute {
  Second = 'Second',
  SecondId = 'SecondId'
}

const routes: RouteInterface[] = [
  {
    path: '1',
    name: 'Second',
    component: SecondComponent
  },
  {
    path: ':id',
    name: 'SecondId',
    component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
