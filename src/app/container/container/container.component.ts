import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { NAV_ITEMS } from '../../_nav';
import { NavHelperService } from '../../core/services/navigations';
import { ItemType } from '../../core/services/navigations/shared/enums/item-type.enum';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  @HostBinding('class') classes = 'container-fluid';
  navItems = NAV_ITEMS;
  helper: NavHelperService;
  navType = ItemType;

  constructor(private navHelper: NavHelperService) {
    this.helper = navHelper;
  }

}
