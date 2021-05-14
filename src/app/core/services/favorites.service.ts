import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { BeatService, BeatVersion } from './beat.service';
import { logger, LoggerLevel } from '../utils/logger';
import { LocksService } from './locks.service';
import { BaseServiceClass } from './base-service.class';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends BaseServiceClass<CacheFavorites> {
  private favorites$: Observable<CacheFavorites> | undefined;

  constructor(@Optional() @SkipSelf() favorites: FavoritesService,
              beatService: BeatService,
              private locksService: LocksService) {
    super(beatService, {
      currentVersion: '',
      favorites: [],
      lastUpdate: new Date()
    });
  }

  protected sync(version: BeatVersion): Observable<CacheFavorites> {
    if (!this.favorites$) {
      return this.favorites$ = of(version).pipe(
        map(ver => {
          this.update({
            lastUpdate: new Date(),
            currentVersion: ver.favorite ?? '',
            favorites: [
              {
                id: 1,
                name: 'First'
              }
            ]
          });
          return this.repeat$.getValue();
        }),
        logger('FavoritesService emitted but after 3 seconds', LoggerLevel.INFO),
        delay(3000),
        tap(() => this.locksService.setLock('-1'))
      );
    } else if (Number(version.favorite) > 10) {
      return this.favorites$ = of(version).pipe(
        map(ver => {
          this.update({
            lastUpdate: new Date(),
            currentVersion: ver.favorite ?? '0',
            favorites: [
              {
                id: 2,
                name: 'Second'
              }
            ]
          });
          return this.repeat$.getValue();
        }),
        logger('FavoritesService updated', LoggerLevel.DEBUG)
      );
    }
    return this.favorites$;
  }
}

interface CacheFavorites {
  lastUpdate: Date;
  currentVersion: string;
  favorites: Favorites[];
}

interface Favorites {
  id: number;
  name: string;
}
