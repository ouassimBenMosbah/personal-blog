import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideComponent } from './router-animation/router-basic-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideComponent]
})
export class AppComponent {
  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
