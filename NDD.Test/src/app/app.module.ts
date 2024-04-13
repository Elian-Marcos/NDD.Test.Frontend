import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AddEditClientComponent } from './client/add-edit-client/add-edit-client.component';
import { ShowClientComponent } from './client/show-client/show-client.component';
import { ApiserviceService } from './apiservice.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AddEditClientComponent,
    ShowClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  providers: [ApiserviceService, provideNgxMask({ })],
  bootstrap: [AppComponent]
})
export class AppModule { }
