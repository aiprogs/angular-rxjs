/* tslint:disable:no-console */
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export enum LoggerLevel {
  TRACE = 1,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  ASSERT
}

export let loggerLevel: LoggerLevel = LoggerLevel.ERROR;

export function setLoggerLevel(level: LoggerLevel): void {
  loggerLevel = level;
}

export const logger = (message: string, level: LoggerLevel) => <T>(source: Observable<T>) =>
  source.pipe(
    tap((value) => {
        switch (level) {
          case LoggerLevel.TRACE:
            if (level >= loggerLevel) {
              console.trace(message, {value});
            }
            break;
          case LoggerLevel.DEBUG:
            if (level >= loggerLevel) {
              console.debug(message, {value});
            }
            break;
          case LoggerLevel.INFO:
            if (level >= loggerLevel) {
              console.info(message, {value});
            }
            break;
          case LoggerLevel.ERROR:
            if (level >= loggerLevel) {
              console.error(message, {value});
            }
            break;
          case LoggerLevel.WARN:
            if (level >= loggerLevel) {
              console.warn(message, {value});
            }
            break;
          case LoggerLevel.ASSERT:
            if (level >= loggerLevel) {
              console.assert(!!Object.keys(value).length,
                'Result of assert check (null, undefined, {}, [], NaN, Infinity and other)');
            }
            break;
        }
      }
    )
  );
