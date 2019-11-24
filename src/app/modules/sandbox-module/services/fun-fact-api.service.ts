import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IChuckNorrisAPIResponse {
  categories: string[];
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class FunFactApiService {
  constructor(private http: HttpClient) {}

  getChuckNorrisJoke(): Observable<string> {
    return this.http
      .get('https://api.chucknorris.io/jokes/random')
      .pipe(map((res: IChuckNorrisAPIResponse) => res.value));
  }

  getKanyWestQuote(): Observable<string> {
    return this.http.get('https://api.kanye.rest').pipe(map((res: { quote: string }) => res.quote));
  }

  getFoodJoke(): Observable<string> {
    return this.http
      .get(`https://api.spoonacular.com/food/jokes/random?apiKey=2417226de29b46fa9f5d4248071a0939 `)
      .pipe(
        map((res: { text: string }) => {
          return res.text;
        })
      );
  }
}
