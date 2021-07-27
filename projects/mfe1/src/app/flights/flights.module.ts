import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    ToastModule
  ],
  declarations: [
    FlightsSearchComponent
  ],
  providers: [
     // Here is the problem, because I have to provide new instance of the service.
                   // Also to show the toast I have to put somewhere in the template <p-toast> which reacts on this service messages.
                   // How to share the service, toast module and the <p-toast> from shell?
  ]
})
export class FlightsModule { }
