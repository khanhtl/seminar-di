// service file
import { Injectable, Inject, forwardRef } from '@angular/core';

@Injectable()
export class ServiceA {
  private value!: string;
  constructor(@Inject(forwardRef(() => ServiceB)) private serviceB: ServiceB) {
    this.serviceB.setValue('Hello from ServiceA');
  }

  getValueFromServiceB(): string {
    return this.serviceB.getValue();
  }

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

}

@Injectable()
export class ServiceB {
  private value!: string;

  constructor(@Inject(forwardRef(() => ServiceA)) private serviceA: ServiceA) {
    this.serviceA.setValue('Hello from ServiceB');
  }

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
