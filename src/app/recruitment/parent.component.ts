import { CommonModule, NgIf } from "@angular/common";
import { Component, Input, forwardRef } from "@angular/core";
import { ChildComponent } from "./children.component";


@Component({
  standalone: true,
  imports: [ChildComponent],
  selector: 'app-parent',
  template: `
  <button (click)="visible = true">Show popup</button>
  @if(visible) {
    <app-child (close)="visible = false"></app-child>
  }
  `,
})
export class ParentComponent {
  private _visible=false;

  get visible() {
    return this._visible;
  }

  set visible(val: boolean) {
    this._visible=val;
  }
}
