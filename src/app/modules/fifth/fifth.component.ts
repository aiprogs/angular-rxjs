import { Component, EventEmitter } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent {
  readonly data$: Observable<{
    counter: number;
  }>;
  readonly start$: EventEmitter<void> = new EventEmitter();
  readonly stop$: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.data$ = interval(500).pipe(
      map(counter => counter + 1),
      startWith(0),
      map(counter => ({counter}))
    );
  }

}
