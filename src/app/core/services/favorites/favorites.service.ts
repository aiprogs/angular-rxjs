import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, delay, map, tap } from 'rxjs/operators';
import { BaseServiceClass } from '../base-service.class';
import { BeatService, BeatVersion } from '../beat.service';
import { LocksService } from '../locks.service';
import { logger, LoggerLevel } from '../../utils/logger';
import { Favorites } from './shared/interfaces/favorites.interface';
@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends BaseServiceClass<Favorites> {
  private favorites$: Observable<Favorites> | undefined;

  constructor(@Optional() @SkipSelf() favorites: FavoritesService,
              beatService: BeatService,
              private locksService: LocksService) {
    super(beatService, {
      currentVersion: '',
      favorites: [],
      lastUpdate: new Date()
    });
  }

  protected sync(version: BeatVersion): Observable<Favorites> {
    if (!this.favorites$) {
      return this.favorites$ = of(version).pipe(
        map(ver => {
          this.update({
            currentVersion: ver.favorite ?? '',
            favorites: [
              {
                id: 1,
                name: 'First'
              }
            ],
            lastUpdate: new Date()
          });
          return this.repeat$.getValue();
        }),
        logger('FavoritesService emitted', LoggerLevel.INFO),
      );
    }
    return this.favorites$;
  }
}



