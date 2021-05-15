import { NavigationAttributes } from './navigation-attributes.interface';
import { NavigationLabel } from './navigation-label.interface';
import { NavigationWrapper } from './navigation-wrapper.interface';
import { NavigationLinkProps } from './navigation-link-props.interface';

export interface NavigationData {
  /**
   * Name will show on buttons, links
   */
  name: string;
  /**
   * url - inside url, used in routerLink
   */
  url?: string | any[];
  /**
   * href - outside url, used in attr.href
   */
  href?: string;
  /**
   * icon - this i
   */
  icon?: string;
  /**
   * title - additional page title
   */
  title?: boolean;
  /**
   * children - NavigationData[]
   */
  children?: NavigationData[];
  /**
   * variant - second class, used nav buttons
   */
  variant?: 'success' | 'danger' | 'info';
  /**
   * attributes - need for customization links.
   * target: '_blank'
   * rel: 'noopener'
   * disabled: true
   */
  attributes?: NavigationAttributes;
  /**
   * divider - show diviver near link
   */
  divider?: boolean;
  /**
   * class - additional class
   */
  class?: string;
  label?: NavigationLabel;
  wrapper?: NavigationWrapper;
  linkProps?: NavigationLinkProps;
}
