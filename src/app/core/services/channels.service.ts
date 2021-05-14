import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { BeatService } from './beat.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  sync$: Observable<CacheChannel>;
  private channels$: Observable<CacheChannel> | undefined;

  constructor(@Optional() @SkipSelf() channels: ChannelsService,
              private beatService: BeatService) {
    this.sync$ = this.beatService.sync$
      .pipe(
        switchMap(versions => {
          return this.sync(versions?.channel);
        }),
        catchError((err, caught) => {
          console.error(err);
          return caught;
        })
      );
  }

  private sync(version: string | undefined): Observable<CacheChannel> {
    if (!this.channels$) {
      return this.channels$ = of(version).pipe(
        switchMap(() => throwError(`Sorry, ChannelsService want die. Last version: ${version}`)),
        finalize(() => console.warn('Complete ChannelsService sync'))
      );
    }
    return this.channels$;
  }
}

interface CacheChannel {
  lastUpdate: Date;
  channels: Channel[];
}

interface Channel {
  id: number;
  name: string;
}
