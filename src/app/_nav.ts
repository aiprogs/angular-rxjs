import { NavigationData } from './core/services/navigations';

export const NAV_ITEMS: NavigationData[] = [
  {
    name: 'Welcome',
    url: 'first'
  },
  {
    name: 'Theory Page',
    url: 'theory'
  },
  {
    name: 'Async',
    url: 'second'
  },
  {
    name: 'SubscriptionLike',
    url: 'third'
  },
  {
    name: 'takeUntil',
    url: 'fourth'
  },
  {
    name: 'Pause Observable',
    url: 'fifth'
  },
  {
    name: 'Injectable unsubscribe',
    url: 'seven'
  },
  {
    name: 'Yandex Website',
    href: 'https://yandex.ru',
    attributes: { target: '_blank', rel: 'noopener'}
  },
  {
    name: '404 page',
    url: '404'
  },
  {
    name: 'Disabled',
    attributes: { disabled: true }
  }
];









