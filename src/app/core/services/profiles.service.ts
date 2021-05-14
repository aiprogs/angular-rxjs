import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { BeatService, BeatVersion } from './beat.service';
import { MockService, SomeData } from './mock.service';
import { logger, LoggerLevel } from '../utils/logger';
import { BaseServiceClass } from './base-service.class';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService extends BaseServiceClass<SomeData> {

  constructor(@Optional() @SkipSelf() profiles: ProfilesService,
              beatService: BeatService,
              private mockService: MockService) {
    super(beatService, {
      name: '',
      description: ''
    });
  }

  protected sync(version: BeatVersion): Observable<SomeData> {
    return of(version).pipe(
      mergeMap(ver => this.mockService.getSomeData(ver.profile ?? '0')),
      logger('ProfilesService emitted', LoggerLevel.INFO)
    );
  }
}
