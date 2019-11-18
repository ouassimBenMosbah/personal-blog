import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  private _game;
  constructor() {}

  ngOnInit() {}

  @HostListener('window:keydown', ['$event'])
  spaceEvent(event: any) {
    if (!this._game) {
      if (event.ctrlKey && event.keyCode === 32) {
        this._game = require('./game');
      } else if (event.keyCode === 32) {
        this._game = require('./game');
      }
    }
  }
}
