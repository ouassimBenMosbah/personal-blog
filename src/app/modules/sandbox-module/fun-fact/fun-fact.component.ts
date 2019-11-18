import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FunFactService } from '../services/fun-fact.service';

@Component({
  selector: 'app-fun-fact',
  templateUrl: './fun-fact.component.html',
  styleUrls: ['./fun-fact.component.scss']
})
export class FunFactComponent implements OnInit {
  public fact$: Observable<string>;

  constructor(private funFactService: FunFactService) {}

  ngOnInit() {
    this.refreshFact();
  }

  private getNewJoke(): Observable<string> {
    return this.funFactService.getJoke();
  }

  public refreshFact() {
    this.fact$ = this.getNewJoke();
  }
}
