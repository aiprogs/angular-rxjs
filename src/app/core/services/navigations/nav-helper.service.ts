import { Injectable } from '@angular/core';
import { NavigationData } from './shared/interfaces/navigation-data.interface';
import { ItemType } from './shared/enums/item-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NavHelperService {

  public itemType(item: NavigationData): ItemType {
    if (item.divider) {
      return ItemType.divider;
    } else if (item.title) {
      return ItemType.title;
    } else if (item.children) {
      return ItemType.dropdown;
    } else if (item.label) {
      return ItemType.label;
    } else if (!Object.keys(item).length) {
      return ItemType.empty;
    } else if (item.url) {
      return ItemType.link;
    } else {
      return ItemType.external_link;
    }

  }

  public hasIcon = (item: NavigationData) => Boolean(item.icon);

  public getIconClass(item: NavigationData): { [className: string]: boolean } {
    const classes: { [className: string]: boolean } = {
      'nav-icon': true
    };
    if (this.hasIcon(item)) {
      const icon = item.icon as string;
      classes[icon] = this.hasIcon(item);
    }
    return classes;
  }

  public getLinkType(item: NavigationData): boolean {
    return item.attributes && item.attributes.disabled ? !!item.attributes.disabled : false;
  }
}
