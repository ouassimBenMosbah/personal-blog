import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
  RouterOutlet,
  RouterState
} from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { displayName } from '../../package.json';
import { slideComponent } from './router-animation/router-basic-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideComponent]
})
export class AppComponent implements OnInit {
  public constructor(private router: Router, private titleService: Title) {}

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    const TITLE_SEPARATOR = ' - ';
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        tap((routerEvent: RouterEvent) => {
          if (routerEvent.id === 1 && routerEvent.url === '/') {
            this.router.navigate(['home']);
          }
        })
      )
      .subscribe(() => {
        const title: string = this.getTitle(
          this.router.routerState,
          this.router.routerState.root
        ).join(TITLE_SEPARATOR);
        this.setTitle(`${displayName} - ${title}`);
      });
  }

  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data: string[] = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, (state as any).firstChild(parent)));
    }
    return data;
  }
}
