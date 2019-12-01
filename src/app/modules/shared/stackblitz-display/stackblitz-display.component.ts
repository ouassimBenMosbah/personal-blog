import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stackblitz-display',
  templateUrl: './stackblitz-display.component.html',
  styleUrls: ['./stackblitz-display.component.scss']
})
export class StackblitzDisplayComponent implements OnInit {
  @Input() url: string;
  @Input() file: string;
  @Input() embed: boolean;
  @Input() hideExplorer: boolean;
  @Input() hideNavigation: boolean;
  @Input() ctl: boolean;
  @Input() view: 'editor' | 'preview';
  @Input() hideDevTools: boolean;
  @Input() devtoolsHeight: number;

  private finalUrl: string;
  public stackblitzIframe: string;
  constructor() {}

  ngOnInit() {
    this.setUrlFromInputs();
    this.stackblitzIframe = `
      <iframe
        class="stackblitz-iframe"
        style="height: ${this.devtoolsHeight ? `${this.devtoolsHeight}px` : '100%'};"
        src="${this.finalUrl}
      ">
      </iframe>`;
  }

  private setUrlFromInputs() {
    if (!this.url) {
      throw new Error('Missing url for stackblitz display');
    }

    if (this.devtoolsHeight && this.devtoolsHeight > 1000) {
      this.devtoolsHeight = 1000;
    }

    const availableInputs = [
      this._file,
      this._embed,
      this._hideExplorer,
      this._hideNavigation,
      this._ctl,
      this._view,
      this._hideDevTools
    ].filter(inputs => !!inputs);

    this.finalUrl = this.url;
    if (availableInputs.length) {
      this.finalUrl += `?${availableInputs.join('&')}`;
    }
  }

  get _embed(): false | string {
    return !!this.embed ? `embed=1` : false;
  }

  get _hideExplorer(): false | string {
    return !!this.hideExplorer ? `hideExplorer=1` : false;
  }

  get _hideNavigation(): false | string {
    return !!this.hideNavigation ? `hideNavigation=1` : false;
  }

  get _ctl(): false | string {
    return !!this.ctl ? `ctl=1` : false;
  }

  get _hideDevTools(): false | string {
    return !!this.hideDevTools ? `hideDevTools=1` : false;
  }

  get _view(): false | string {
    return !!this.embed ? `embed=1` : false;
  }

  get _file(): false | string {
    return !!this.file ? `file=${this.file}` : false;
  }
}
