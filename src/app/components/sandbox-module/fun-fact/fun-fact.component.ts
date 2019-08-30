import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FunFactService } from './../services/fun-fact.service';

@Component({
  selector: 'app-fun-fact',
  templateUrl: './fun-fact.component.html',
  styleUrls: ['./fun-fact.component.scss']
})
export class FunFactComponent implements OnInit {
  @Input() fact$: Observable<string>;
  constructor(private funFactService: FunFactService) {}

  ngOnInit() {}

  public refreshFact() {
    this.fact$ = this.funFactService.getJoke();
  }
}
