import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container/container.component';
import { NamedRoute, NamedRouterModule } from './core/utils/named-route/named-router.module';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

export const enum AppRoute {
  Main = 'main',
  First = 'first',
  Second = 'second'
}

const routes: NamedRoute[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first',
    name: AppRoute.Main
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'first',
        name: AppRoute.First,
        loadChildren: () => import('./modules/first/first.module').then(mod => mod.FirstModule)
      },
      {
        path: 'second',
        name: AppRoute.Second,
        loadChildren: () => import('./modules/second/second.module').then(mod => mod.SecondModule)
      },
      {
        path: 'third',
        name: 'third',
        loadChildren: () => import('./modules/third/third.module').then(mod => mod.ThirdModule)
      },
      {
        path: 'fourth',
        name: 'fourth',
        loadChildren: () => import('./modules/fourth/fourth.module').then(mod => mod.FourthModule)
      },
      {
        path: 'fifth',
        name: 'fifth',
        loadChildren: () => import('./modules/fifth/fifth.module').then(mod => mod.FifthModule)
      }
    ]
  },
  {
    path: '404',
    name: 'notFound',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    name: 'undefined1',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [NamedRouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
