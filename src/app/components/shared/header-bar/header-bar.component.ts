import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute) {
    this.menu = [
      { id: 1, label: 'Home', url: 'home', active: true },
      { id: 2, label: 'Sandbox', url: 'sandbox', active: false }
    ];
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((navigationEnd: NavigationEnd) => {
        const currentUrl: string = navigationEnd.urlAfterRedirects.substring(1);
        this.menu = this.updateActiveTab([...this.menu], currentUrl);
      });
  }

  private updateActiveTab(menu: Tab[], currentUrl: string): Tab[] {
    menu.forEach((tab: Tab) => {
      tab.active = tab.url === currentUrl;
    });
    return menu;
  }

  public redirect(tab: Tab) {
    this.router.navigate([tab.url]);
    this.menu.forEach(tabMenu => {
      tabMenu.active = tabMenu.id === tab.id;
    });
  }
}
