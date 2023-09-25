import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Brepi } from '../components/brepi-card/models/brepi';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  readonly beersBaseUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) {}

  getBeersListByPageNumber(pageNumber: number): Observable<Brepi[]> {
    return this.http
      .get<Brepi[]>(`${this.beersBaseUrl}?page=${pageNumber}&per_page=6`)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of([]);
        })
      );
  }
}
