import { Injectable } from '@angular/core';
import { FunFactApiService } from './fun-fact-api.service';

@Injectable({
  providedIn: 'root'
})
export class FunFactService {
  constructor(private funFactApiService: FunFactApiService) {}

  getJoke() {
    const NUMBER_OF_POSSIBILITIES = 3;
    const randomNumber: number = Math.floor(Math.random() * NUMBER_OF_POSSIBILITIES + 1);
    if (randomNumber === 1) {
      return this.funFactApiService.getKanyWestQuote();
    } else if (randomNumber === 2) {
      return this.funFactApiService.getFoodJoke();
    }
    return this.funFactApiService.getChuckNorrisJoke();
  }
}
