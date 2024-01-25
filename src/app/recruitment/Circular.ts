// service file
import { Injectable} from '@angular/core';

@Injectable()
export class ServiceA {
  constructor(private serviceB: ServiceB) {
    this.setValue('Hello from ServiceA');
  }

  private value!: string;

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
    this.value = value;
  }

  getValueFromServiceB(): string {
    return this.serviceB.getValue();
  }

}

@Injectable()
export class ServiceB {
  private value!: string;

  constructor(private serviceA: ServiceA) {
    this.setValue('Hello from ServiceB');
  }

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
