import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container/container.component';
import { APP_ROUTES } from './_nav';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_ROUTES.first
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: APP_ROUTES.first,
        loadChildren: () => import('./modules/first/first.module').then(mod => mod.FirstModule)
      },
      {
        path: APP_ROUTES.second,
        loadChildren: () => import('./modules/second/second.module').then(mod => mod.SecondModule)
      },
      {
        path: APP_ROUTES.third,
        loadChildren: () => import('./modules/third/third.module').then(mod => mod.ThirdModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.first
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
