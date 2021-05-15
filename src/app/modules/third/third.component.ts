import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { FavoritesService } from '../../core/services/favorites/favorites.service';
import { Favorites } from '../../core/services/favorites';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdComponent implements OnInit, OnDestroy {

  favorites: Favorites | undefined;
  private subscriptionLike: SubscriptionLike;

  constructor(private favoriteService: FavoritesService, private cd: ChangeDetectorRef) {
    this.subscriptionLike = this.favoriteService.update$
      .pipe(
        finalize(() => console.log('ThirdComponent favoriteService completed'))
      )
      .subscribe(
      favorites => {
        this.favorites = favorites;
        this.cd.markForCheck();
      }
    );
  }

  ngOnInit(): void {
    console.log(this.favorites);
  }

  ngOnDestroy(): void {
    this.subscriptionLike?.unsubscribe();
  }

}
