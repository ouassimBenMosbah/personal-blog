import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface ITab {
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
  public menu: ITab[] = [];

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

  private initMenu(router: Router): ITab[] {
    const menu: ITab[] = [];
    router.config
      .filter(config => !!config.data)
      .forEach(
        ({ data }: { data: { title: string; url: string; animation: string; order: number } }) => {
          menu.push({ id: data.order, label: data.title, url: data.url, active: false });
        }
      );
    return menu.sort((tabA: ITab, tabB: ITab) => tabA.id - tabB.id);
  }

  private updateActiveTab(menu: ITab[], currentUrl: string): ITab[] {
    menu.forEach((tab: ITab) => {
      tab.active = tab.url === currentUrl;
    });
    return menu;
  }

  public redirect(tab: ITab) {
    this.router.navigate([tab.url]);
  }
}
