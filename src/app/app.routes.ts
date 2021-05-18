import { NamedRoute } from './core/utils/named-route/named-router.module';
import { ContainerComponent } from './container/container/container.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { RouteInterface } from './core/utils/route-manager/all.interface';

export const appRoutes: RouteInterface[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first',
    name: 'main'
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'first',
        name: 'first',
        loadChildren: () => import('./modules/first/first.module').then(mod => mod.FirstModule)
      },
      {
        path: 'second',
        name: 'second',
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
