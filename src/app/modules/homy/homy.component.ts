import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';


import { CountryService } from 'src/app/services/country.service';
import { DataService } from 'src/app/services/data.service';
import { Country } from 'src/app/models/country';
import {Resp } from 'src/app/models/resp';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './homy.component.html',
  styleUrls: ['./homy.component.css']
})

export class HomyComponent implements OnInit {
  loading = false;
 // countries$: Observable<Country[]>;
 // res: Employee[];
  res: Resp;
  trainNo: string;
  private searchTerms = new Subject<string>();

  constructor(private dataService: DataService, private countryService: CountryService) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    /*this.dataService.sendGetRequest(this.trainNo).subscribe((data) => {
      // tslint:disable-next-line: no-debugger
      debugger;
      console.log(data);
      this.res = data;


    });*/



   /*  this.countries$ = this.searchTerms.pipe(
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.countryService.searchCountry(term)),
      tap(_ => this.loading = false)
    ); */
  }

  onKeydown(event: any) {
   /* if (event.key === 'Enter') {
      console.log(event);
      */
     this.dataService.sendGetRequest(this.trainNo).subscribe((data) => {
      // tslint:disable-next-line: no-debugger
      debugger;
      console.log(data);
      this.res = data;
    });
  }

}
