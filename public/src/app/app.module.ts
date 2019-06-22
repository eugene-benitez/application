import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JIPCComponent } from './common/components/jipc/jipc.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './common/services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    JIPCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
