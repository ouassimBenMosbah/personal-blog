import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stackblitz-display',
  templateUrl: './stackblitz-display.component.html',
  styleUrls: ['./stackblitz-display.component.scss']
})
export class StackblitzDisplayComponent implements OnInit {
  @Input() url: string;
  public stackblitzIframe: string;
  constructor() {}

  ngOnInit() {
    this.stackblitzIframe = `
      <iframe
        style="
          width: 100%;
          height: 100%;
          min-height: 500px;
          padding: 20px;
          box-sizing: border-box;
        "
        src="${this.url}
      ">
      </iframe>`;
  }
}
