import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { BeatService } from './core/services/beat.service';
import { Subscription } from 'rxjs';
import { BookmarksService } from './core/services/bookmarks.service';
import { ChannelsService } from './core/services/channels.service';
import { LocksService } from './core/services/locks.service';
import { ProfilesService } from './core/services/profiles.service';
import { RemindersService } from './core/services/reminders.service';
import { FavoritesService } from './core/services/favorites/favorites.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: `
    <router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {

  private subscriptions = new Subscription();

  constructor(private beatSrv: BeatService,
              private bookmarksService: BookmarksService,
              private channelsService: ChannelsService,
              private favoritesService: FavoritesService,
              private locksService: LocksService,
              private profilesService: ProfilesService,
              private remindersService: RemindersService,
  ) {
    this.subscriptions.add(this.beatSrv.sync$.subscribe());
    this.subscriptions.add(this.bookmarksService.sync$.subscribe());
    this.subscriptions.add(this.channelsService.sync$.subscribe());
    this.subscriptions.add(this.favoritesService.sync$.subscribe());
    this.subscriptions.add(this.locksService.sync$.subscribe());
    this.subscriptions.add(this.profilesService.sync$.subscribe());
    this.subscriptions.add(this.remindersService.sync$.subscribe());

  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
