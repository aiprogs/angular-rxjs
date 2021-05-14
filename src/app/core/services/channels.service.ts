import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { BeatService, BeatVersion } from './beat.service';
import { BaseServiceClass } from './base-service.class';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService extends BaseServiceClass<CacheChannel> {
  private channels$: Observable<CacheChannel> | undefined;

  constructor(@Optional() @SkipSelf() channels: ChannelsService,
              beatService: BeatService) {
    super(beatService, {
      channels: [],
      lastUpdate: new Date()
    });
  }

  protected sync(version: BeatVersion): Observable<CacheChannel> {
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
