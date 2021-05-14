import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BeatService } from './core/services/beat.service';
import { Subscription } from 'rxjs';
import { BookmarksService } from './core/services/bookmarks.service';
import { ChannelsService } from './core/services/channels.service';
import { FavoritesService } from './core/services/favorites.service';
import { LocksService } from './core/services/locks.service';
import { ProfilesService } from './core/services/profiles.service';
import { RemindersService } from './core/services/reminders.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: `
    <router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  private combineSubscription = new Subscription();

  constructor(private beatSrv: BeatService,
              private bookmarksService: BookmarksService,
              private channelsService: ChannelsService,
              private favoritesService: FavoritesService,
              private locksService: LocksService,
              private profilesService: ProfilesService,
              private remindersService: RemindersService,
              private router: Router
  ) {
    this.combineSubscription.add(this.beatSrv.sync$.subscribe());
    this.combineSubscription.add(this.bookmarksService.sync$.subscribe());
    this.combineSubscription.add(this.channelsService.sync$.subscribe());
    this.combineSubscription.add(this.favoritesService.sync$.subscribe());
    this.combineSubscription.add(this.locksService.sync$.subscribe());
    this.combineSubscription.add(this.profilesService.sync$.subscribe());
    this.combineSubscription.add(this.remindersService.sync$.subscribe());

  }

  ngOnInit(): void {
    console.log(this.router.config);
  }

  ngOnDestroy(): void {
    this.combineSubscription?.unsubscribe();
  }
}
