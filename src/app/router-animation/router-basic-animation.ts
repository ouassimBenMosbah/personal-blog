import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

const translateFromLeftToRight = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [style({ left: '-100%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
    query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
  ]),
  query(':enter', animateChild())
];

const translateFromRightToLeft = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ]),
  query(':enter', [style({ right: '-100%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('300ms ease-out', style({ right: '100%' }))]),
    query(':enter', [animate('300ms ease-out', style({ right: '0%' }))])
  ]),
  query(':enter', animateChild())
];

export const slideComponent = trigger('routeAnimations', [
  transition('blogPage => homePage', translateFromLeftToRight),
  transition('sandboxPage => blogPage', translateFromLeftToRight),
  transition('sandboxPage => homePage', translateFromLeftToRight),
  transition('blogPage => sandboxPage', translateFromRightToLeft),
  transition('homePage => blogPage', translateFromRightToLeft),
  transition('homePage => sandboxPage', translateFromRightToLeft)
]);
