import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { finalize, map, switchMap, take } from 'rxjs/operators';
import { BeatService } from './beat.service';
import { logger, LoggerLevel } from '../utils/logger';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  sync$: Observable<string>;

  constructor(@Optional() @SkipSelf() reminders: RemindersService,
              private beatService: BeatService) {
    this.sync$ = this.beatService.sync$
      .pipe(
        switchMap(versions => {
          return RemindersService.sync(versions?.reminder ?? '0');
        }),
        take(3),
        finalize(() => console.warn('RemindersService completed work'))
      );
  }

  private static sync(version: string): Observable<string> {
    return of(version).pipe(
      map(ver => {
        return ver;
      }),
      logger('RemindersService emitted', LoggerLevel.INFO)
    );
  }
}
