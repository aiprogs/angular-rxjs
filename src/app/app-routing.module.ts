import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container/container.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first'
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'first',
        loadChildren: () => import('./modules/first/first.module').then(mod => mod.FirstModule)
      },
      {
        path: 'second',
        loadChildren: () => import('./modules/second/second.module').then(mod => mod.SecondModule)
      },
      {
        path: 'third',
        loadChildren: () => import('./modules/third/third.module').then(mod => mod.ThirdModule)
      },
      {
        path: 'fourth',
        loadChildren: () => import('./modules/fourth/fourth.module').then(mod => mod.FourthModule)
      },
      {
        path: 'fifth',
        loadChildren: () => import('./modules/fifth/fifth.module').then(mod => mod.FifthModule)
      },
      {
        path: 'seven',
        loadChildren: () => import('./modules/seven/seven.module').then(mod => mod.SevenModule)
      }
    ]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
