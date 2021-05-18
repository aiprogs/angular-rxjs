import { ModuleWithProviders, NgModule } from '@angular/core';
import { ExtraOptions, Route, RouterModule, Routes } from '@angular/router';
import { Path } from './path-magener';

export interface NamedRoute extends Route {
  name?: string;
  children?: NamedRoute[];
}

@NgModule({})
export class NamedRouterModule extends RouterModule {
  static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders<RouterModule> {
    Path.addRoute(routes);
    return RouterModule.forRoot(routes, config);
  }

  static forChild(routes: Routes): ModuleWithProviders<RouterModule> {
    Path.addRoute(routes);
    return RouterModule.forChild(routes);
  }
}
