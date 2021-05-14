import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { BeatService } from './beat.service';
import { MockService, SomeData } from './mock.service';
import { logger, LoggerLevel } from '../utils/logger';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  sync$: Observable<SomeData>;

  constructor(@Optional() @SkipSelf() profiles: ProfilesService,
              private beatService: BeatService,
              private mockService: MockService) {
    this.sync$ = this.beatService.sync$
      .pipe(
        switchMap(versions => {
          return this.sync(versions?.profile ?? '0');
        })
      );
  }

  private sync(version: string): Observable<SomeData> {
    return of(version).pipe(
      mergeMap(ver => this.mockService.getSomeData(ver)),
      logger('ProfilesService emitted', LoggerLevel.INFO)
    );
  }
}
