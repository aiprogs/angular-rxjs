import { Injectable, Optional, SkipSelf } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { logger, LoggerLevel } from '../utils/logger';

@Injectable({
  providedIn: 'root'
})
export class BeatService {

  sync$: Observable<BeatVersion>;
  private beatVersions: BeatVersion = {
    bookmark: '0',
    lock: '0',
    channel: '0',
    favorite: '0',
    profile: '0',
    reminder: '0'
  };

  constructor(@Optional() @SkipSelf() beat: BeatService) {
    this.sync$ = this.sync(5000);
  }

  private sync(nextCallInterval = 2000): Observable<BeatVersion> {
    return interval(nextCallInterval).pipe(
      map(response => {
        const isOdd = !!(response % 2);
        let versions: BeatVersion;
        if (isOdd) {
          versions = {
            bookmark: (response).toString(10),
            profile: (response * 2).toString(10),
            lock: (response * 3).toString(10),
            favorite: (response * 4).toString(10),
            channel: (response * 5).toString(10),
            reminder: (response * 6).toString(10),
          };
        } else {
          versions = {};
        }
        return versions;
      }),
      logger('BeatService versions', LoggerLevel.ASSERT),
      filter(versions => !!Object.keys(versions).length),
      map(versions => this.beatVersions = versions),
      share(),
    );
  }
}


export interface BeatVersion {
  bookmark?: string;
  channel?: string;
  favorite?: string;
  lock?: string;
  profile?: string;
  reminder?: string;
}
