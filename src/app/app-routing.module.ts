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
