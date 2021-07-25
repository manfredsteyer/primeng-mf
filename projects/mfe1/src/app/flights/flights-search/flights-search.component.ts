import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  constructor(private messageService: MessageService) {}

  showToast(): void {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }
}
