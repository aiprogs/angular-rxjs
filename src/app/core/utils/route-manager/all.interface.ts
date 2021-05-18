import { Data, Route } from '@angular/router';

export enum RobotsEnum {
  NOINDEX = 'noindex',
  NOFOLLOW = 'nofollow',
  FOLLOW = 'follow',
  NOIMAGEINDEX = 'noimageindex',
  NOARCHIVE = 'noarchive',
}

export interface MetaData {
  title?: string;
  description?: string;
  robots?: RobotsEnum;
}

export interface RouteData extends Data {
  title?: string;
  seo?: MetaData;
  layout?: string;
}

export interface RouteInterface extends Route {
  name?: string;
  data?: RouteData;
  routeChildren?: RouteInterface[];
  children?: RouteInterface[];
}
