import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { BeatService } from './beat.service';
import { logger, LoggerLevel } from '../utils/logger';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  sync$: Observable<CacheFavorites>;
  private favorites$: Observable<CacheFavorites> | undefined;

  constructor(@Optional() @SkipSelf() favorites: FavoritesService,
              private beatService: BeatService) {
    this.sync$ = this.beatService.sync$
      .pipe(
        switchMap(versions => {
          return this.sync(versions?.favorite ?? '0');
        })
      );
  }

  private sync(version: string): Observable<CacheFavorites> {
    if (!this.favorites$) {
      return this.favorites$ = of(version).pipe(
        map(ver => {
          return {
            lastUpdate: new Date(),
            currentVersion: ver,
            favorites: [
              {
                id: 1,
                name: 'First'
              }
            ]
          };
        }),
        logger('FavoritesService emitted but after 3 seconds', LoggerLevel.INFO),
        delay(3000)
      );
    } else if (Number(version) > 10) {
      return this.favorites$ = of(version).pipe(
        map(ver => {
          return {
            lastUpdate: new Date(),
            currentVersion: ver,
            favorites: [
              {
                id: 2,
                name: 'Second'
              }
            ]
          };
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
