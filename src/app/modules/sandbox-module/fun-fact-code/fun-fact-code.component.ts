import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-fun-fact-code',
  templateUrl: './fun-fact-code.component.html',
  styleUrls: ['./fun-fact-code.component.scss']
})
export class FunFactCodeComponent implements OnInit {
  private url = 'https://stackblitz.com/edit/angular-x2pfst';
  public urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
