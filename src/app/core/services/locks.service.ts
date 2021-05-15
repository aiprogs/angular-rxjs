import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { BeatService, BeatVersion } from './beat.service';
import { logger, LoggerLevel } from '../utils/logger';
import { BaseServiceClass } from './base-service.class';

@Injectable({
  providedIn: 'root'
})
export class LocksService extends BaseServiceClass<LockData> {

  constructor(@Optional() @SkipSelf() locks: LocksService,
              beatService: BeatService) {
    super(beatService, {
      name: '',
      version: ''
    });
  }

  protected sync(version: BeatVersion): Observable<LockData> {
    return of(version.lock).pipe(
      map(ver => {
        if (this.repeat$.getValue().version >= '10') {
          this.setLock('1');
          return this.repeat$.getValue();
        }
        this.setLock(ver ?? '1');
        return this.repeat$.getValue();
      }),
      logger('LocksService emitted', LoggerLevel.INFO)
    );
  }

  public setLock(version: string): void {
    this.update({
      version,
      name: new Date().toString()
    });
  }

}

interface LockData {
  name: string;
  version: string;
}
