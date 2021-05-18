import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BeatService } from './core/services/beat.service';
import { Subscription } from 'rxjs';
import { BookmarksService } from './core/services/bookmarks.service';
import { ChannelsService } from './core/services/channels.service';
import { LocksService } from './core/services/locks.service';
import { ProfilesService } from './core/services/profiles.service';
import { RemindersService } from './core/services/reminders.service';
import { FavoritesService } from './core/services/favorites/favorites.service';
import { Path } from './core/utils/named-route/path-magener';
import { SecondNamedRoute } from './modules/second/second-routing.module';

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
              private router: Router,
  ) {
    this.subscriptions.add(this.beatSrv.sync$.subscribe());
    this.subscriptions.add(this.bookmarksService.sync$.subscribe());
    this.subscriptions.add(this.channelsService.sync$.subscribe());
    this.subscriptions.add(this.favoritesService.sync$.subscribe());
    this.subscriptions.add(this.locksService.sync$.subscribe());
    this.subscriptions.add(this.profilesService.sync$.subscribe());
    this.subscriptions.add(this.remindersService.sync$.subscribe());
    /**
     * Получаем path
     */
    console.log(Path.to('main'));
    console.log(Path.to('second'));
    console.log(Path.to('third'));
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
