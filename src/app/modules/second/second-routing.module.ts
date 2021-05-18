import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedRoute, NamedRouterModule } from '../../core/utils/named-route/named-router.module';
import { SecondComponent } from './second.component';

export const enum SecondNamedRoute {
  Second = 'Second',
  SecondId = 'SecondId'
}

const routes: NamedRoute[] = [
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
  imports: [NamedRouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
