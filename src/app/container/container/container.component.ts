import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAV_ITEMS } from '../../_nav';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  navItems = NAV_ITEMS;
}
