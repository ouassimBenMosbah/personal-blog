import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Tab {
  id: number;
  label: string;
  url: string;
  active: boolean;
}

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  public menu: Tab[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.menu = this.initMenu(this.router);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((navigationEnd: NavigationEnd) => {
        const currentUrl: string = navigationEnd.urlAfterRedirects.substring(1);
        this.menu = this.updateActiveTab([...this.menu], currentUrl);
      });
  }

  private initMenu(router: Router): Tab[] {
    const menu: Tab[] = [];
    router.config
      .filter(config => !!config.data)
      .forEach(
        ({ data }: { data: { title: string; url: string; animation: string; order: number } }) => {
          menu.push({ id: data.order, label: data.title, url: data.url, active: false });
        }
      );
    return menu.sort((tabA: Tab, tabB: Tab) => tabA.id - tabB.id);
  }

  private updateActiveTab(menu: Tab[], currentUrl: string): Tab[] {
    menu.forEach((tab: Tab) => {
      tab.active = tab.url === currentUrl;
    });
    return menu;
  }

  public redirect(tab: Tab) {
    this.router.navigate([tab.url]);
  }
}
