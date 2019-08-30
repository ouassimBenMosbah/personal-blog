import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppResolver implements Resolve<boolean> {
  constructor(private router: Router) {}

  resolve(): Observable<boolean> {
    return of(true);
  }
}
