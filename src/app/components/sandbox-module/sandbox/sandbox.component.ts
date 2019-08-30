import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FunFactService } from '../services/fun-fact.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  public fact$: Observable<string>;
  constructor(private funFactService: FunFactService) {}

  ngOnInit() {
    this.fact$ = this.funFactService.getJoke();
  }
}
