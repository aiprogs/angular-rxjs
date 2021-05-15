import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BookmarksService } from '../../core/services/bookmarks.service';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourthComponent implements OnInit, OnDestroy {

  bookmarks = '';
  private destroyer$ = new Subject();

  constructor(private bookmarkService: BookmarksService, private cd: ChangeDetectorRef) {
    this.bookmarkService.update$
      .pipe(
        takeUntil(this.destroyer$),
        finalize(() => console.log('FourthComponent bookmarkService finalized'))
      )
      .subscribe(bookmarks => {
        this.bookmarks = bookmarks;
        this.cd.markForCheck();
      });
  }

  ngOnInit(): void {
    console.log('FourthComponent', this.bookmarks);
  }

  ngOnDestroy(): void {
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }

}
