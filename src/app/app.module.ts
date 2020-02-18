import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './modules/test/test.module';
import { RouteGuardService } from './guards/route-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data.service';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RouteGuardService, DataService, {

    provide: HTTP_INTERCEPTORS,

    useClass: HttpErrorInterceptor,

    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
