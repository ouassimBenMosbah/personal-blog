import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ChuckNorrisAPIResponse {
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
      .pipe(map((res: ChuckNorrisAPIResponse) => res.value));
  }

  getFactAboutNumber(): Observable<string> {
    return this.http
      .get('https://numbersapi.com/random/trivia', { responseType: 'text' })
      .pipe(map((res: string) => res));
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
