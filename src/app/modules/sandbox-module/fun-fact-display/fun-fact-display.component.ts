import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-fact-display',
  templateUrl: './fun-fact-display.component.html',
  styleUrls: ['./fun-fact-display.component.scss']
})
export class FunFactDisplayComponent implements OnInit {
  @Input() fact: string;
  constructor() {}

  ngOnInit() {}
}
