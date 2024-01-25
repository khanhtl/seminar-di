import { ServiceB } from './../recruitment/Resolve';
import { Component } from '@angular/core';
import { ServiceA } from '../recruitment/Resolve';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
  providers: [ServiceA, ServiceB]
})
export class ErrorComponent {
  valueFromServiceA: string;
  valueFromServiceB: string;

  constructor(private serviceA: ServiceA) {
    this.valueFromServiceA = this.serviceA.getValueFromServiceB();
    this.valueFromServiceB = this.serviceA.getValue();
  }
}
