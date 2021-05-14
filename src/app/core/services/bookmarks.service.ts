import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BeatService } from './beat.service';
import { logger, LoggerLevel } from '../utils/logger';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  sync$: Observable<string>;

  constructor(@Optional() @SkipSelf() bookmarks: BookmarksService,
              private beatService: BeatService) {
    this.sync$ = this.beatService.sync$
      .pipe(
        switchMap(versions => {
          return BookmarksService.sync(versions?.reminder ?? '0');
        })
      );
  }

  private static sync(version: string): Observable<string> {
    return of(version)
      .pipe(
        map((ver) => {
          return ver;
        }),
        logger('BookmarksService emitted', LoggerLevel.INFO)
      );
  }
}
