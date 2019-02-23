import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent implements OnInit {
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
