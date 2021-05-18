import { Route } from '@angular/router';
import { NamedRoute } from './named-router.module';

interface RouterManagerGet {
  path: string;
  params: (...arg: string[]) => string;
}

class PathManagerInstance {
  private routes = new Map<string, NamedRoute>();

  constructor() {
  }

  addRoute(routes: NamedRoute[]): void {
    routes.forEach(route => {
      if (route.path && route.name) {
        this.routes.set(route.name, route);
      }

      if (route.children?.length) {
        this.addRoute(route.children);
      }
    });
  }

  to(name: string): RouterManagerGet {
    console.log(this.routes.get(name), name, this.routes);
    const path = this.routes.get(name)?.path || '';

    return {
      path,
      params: this.params(path)
    };

  }

  private params(path: string): (...arg: string[]) => string {
    return (...arg: string[]) => {
      /**
       * Парсим сегменты урла, заменяем на параметры
       */
      return path;
    };
  }

  public getAll(): Map<string, Route> {
    return this.routes;
  }

}

export let Path = new PathManagerInstance();
