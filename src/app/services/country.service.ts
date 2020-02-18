import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../models/country';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  endpoint = 'https://restcountries.eu/rest/v2/name/';

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    // tslint:disable-next-line: no-debugger
    debugger;
    const url = `${this.endpoint}${term}`;
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(this.handleError<Country[]>('countries', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
