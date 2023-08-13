import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { BookingPageComponent } from './component/booking-page/booking-page.component';
import { FlightsChartTableComponent } from './Modals/flights-chart-table/flights-chart-table.component';
import { StaysChartTableComponent } from './Modals/stays-chart-table/stays-chart-table.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    BookingPageComponent,
    FlightsChartTableComponent,
    StaysChartTableComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
MatTableModule,
MatFormFieldModule,
MatInputModule,
MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
