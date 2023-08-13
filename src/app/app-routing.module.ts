import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './component/booking-page/booking-page.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';


const routes: Routes = [
  {path:'',component:SignUpComponent},
  {path:'login',component:SignUpComponent},
  {path:'booking',component:BookingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
