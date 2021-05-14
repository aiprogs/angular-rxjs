import { BehaviorSubject, Observable } from 'rxjs';
import { repeatWhen, switchMap } from 'rxjs/operators';
import { BeatService, BeatVersion } from './beat.service';
import { logger, LoggerLevel } from '../utils/logger';

export abstract class BaseServiceClass<T> {
  public sync$: Observable<T>;
  public update$: Observable<T>;

  protected repeat$: BehaviorSubject<T>;

  protected constructor(private beatService: BeatService,
                        init: T) {
    this.repeat$ = new BehaviorSubject<T>(init);
    this.sync$ = this.beatService.sync$
      .pipe(
        repeatWhen(() => this.repeat$),
        switchMap(versions => {
          return this.sync(versions);
        })
      );

    this.update$ = this.repeat$.asObservable().pipe(
      logger('Repeat ....', LoggerLevel.DEBUG)
    );
  }

  protected abstract sync(versions: BeatVersion): Observable<T>;

  protected update(value: T): void {
    this.repeat$.next(value);
  }

}
