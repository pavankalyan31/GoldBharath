import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveRatesComponent } from './live-rates/live-rates.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LocateUsComponent } from './locate-us/locate-us.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',component:LiveRatesComponent
  },
  {
    path:'LiveRates',component:LiveRatesComponent
  },
  {
    path:'Products',component:ProductsComponent
  },
  {
    path:'AboutUs',component:AboutUsComponent
  },
  {
    path:'PrivacyPolicy',component:PrivacyPolicyComponent
  },
  {
    path:'LocateUs',component:LocateUsComponent
  },
  {
    path:'Bookings',component:BookingsComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Register',component:RegisterComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
