import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Data } from '../models/Data';

import { map, retry, catchError } from 'rxjs/operators';
import { Resp } from '../models/resp';
import { Employee } from '../models/employee';
import { of } from 'rxjs/internal/observable/of';
import { getUrlScheme } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private REST_API_SERVER = 'https://api.railwayapi.com/v2/name-number/train/16382/apikey/cz5tzms50g/';
     private REST_API_SERVER = 'https://api.railwayapi.com/v2/name-number/train/';
     private url: string;
  // private REST_API_SERVER = 'http://localhost:4201/homy';
 /* employeeData = {
    employees: [
        {
            employeeName: 'John Doe',
            employeeId: 123456,
            employeeDept: 'Accounts',
            employeeExp: 8
        }

     ]
};*/
respData = {
  resp: [
      {
        debit: 1,
        train:
        {classes:
        [
        {code: '3E', available: 'N', name: '3rd AC ECONOMY'},
        {code: '2S', available: 'N', name: 'SECOND SEATING'},
        {code: 'CC', available: 'N', name: 'AC CHAIR CAR'},
        {code: '1A', available: 'N', name: 'FIRST AC'},
        {code: '2A', available: 'Y', name: 'SECOND AC'},
        {code: 'SL', available: 'Y', name: 'SLEEPER CLASS'},
        {code: '3A', available: 'Y', name: 'THIRD AC'},
        {code: 'FC', available: 'N', name: 'FIRST CLASS'}],
        name: 'CAPE MUMBAI EXP',
        days: [
        {code: 'MON', runs: 'Y'},
        {code: 'TUE', runs: 'Y'},
        {code: 'WED', runs: 'Y'},
        {code: 'THU', runs: 'Y'},
        {code: 'FRI', runs: 'Y'},
        {code: 'SAT', runs: 'Y'},
        {code: 'SUN', runs: 'Y'}
        ],
         number: '16382'
      },
         response_code: 200
      }

   ]
};

  resp =
      {
        debit: 1,
        train:
        {classes:
        [
        {code: '3E', available: 'N', name: '3rd AC ECONOMY'},
        {code: '2S', available: 'N', name: 'SECOND SEATING'},
        {code: 'CC', available: 'N', name: 'AC CHAIR CAR'},
        {code: '1A', available: 'N', name: 'FIRST AC'},
        {code: '2A', available: 'Y', name: 'SECOND AC'},
        {code: 'SL', available: 'Y', name: 'SLEEPER CLASS'},
        {code: '3A', available: 'Y', name: 'THIRD AC'},
        {code: 'FC', available: 'N', name: 'FIRST CLASS'}],
        name: 'CAPE MUMBAI EXP',
        days: [
        {code: 'MON', runs: 'Y'},
        {code: 'TUE', runs: 'Y'},
        {code: 'WED', runs: 'Y'},
        {code: 'THU', runs: 'Y'},
        {code: 'FRI', runs: 'Y'},
        {code: 'SAT', runs: 'Y'},
        {code: 'SUN', runs: 'Y'}
        ],
         number: '16382'
      },
         response_code: 200
      };







constructor(private httpClient: HttpClient) { }

/*public sendGetRequest(trainNo: string): Observable<Resp> {
  return of(this.resp);
}*/
  public sendGetRequest(trainNo: string): Observable<Resp> {
    this.url = this.getUrl(trainNo);
    return this.httpClient.get<Resp>(this.url).pipe(map(response => {
      return response;
    }
      ));
  }
  public getUrl(trainNo: string): string {

    return `${this.REST_API_SERVER}${trainNo}/apikey/cz5tzms50g/`;
  }
 /* public sendGetRequest(): Observable<Employee[]> {
    return of(this.employeeData.employees);
    }*/


}
