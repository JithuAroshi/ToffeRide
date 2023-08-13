import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent {
  IsFlightMode = true;
  IsStayMode = false;
  IsAccountMode = true;
  IsTicketMode = false;
  IsPaymentMode = false;

  flightSetting() {
    this.IsFlightMode = true;
    this.IsStayMode = false;
  }

  staysSetting() {
    this.IsStayMode = true;
    this.IsFlightMode = false;
  }

  account() {
    this.IsAccountMode = true;
    this.IsTicketMode = false;
    this.IsPaymentMode = false;
  }

  ticket() {
    this.IsTicketMode = true;
    this.IsAccountMode = false;
    this.IsPaymentMode = false;
  }

  payment() {
    this.IsPaymentMode = true;
    this.IsAccountMode = false;
    this.IsTicketMode = false;
  }
}
