import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedRoute, NamedRouterModule } from '../../core/utils/named-route/named-router.module';
import { SecondComponent } from './second.component';

const routes: NamedRoute[] = [
  {
    path: '1',
    name: 'secondMain',
    component: SecondComponent
  },
  {
    path: ':id',
    name: 'secondId',
    component: SecondComponent
  }
];

@NgModule({
  imports: [NamedRouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
