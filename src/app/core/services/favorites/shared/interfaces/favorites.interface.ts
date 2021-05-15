import { Favorite } from './favorite.interface';

export interface Favorites {
  lastUpdate: Date;
  currentVersion: string;
  favorites: Favorite[];
}
