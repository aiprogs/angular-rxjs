import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
        this.setLock(ver ?? '0');
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
