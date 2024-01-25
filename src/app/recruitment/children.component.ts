import { CommonModule } from "@angular/common";
import { Component, EventEmitter, forwardRef, Inject, Input, Output } from "@angular/core";
import { ParentComponent } from "./parent.component";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-child',
  template: `
    <div class="popup">
      <button (click)="btnCloseClick()" class="popup-close">Đóng</button>
    </div>
  `,
})
export class ChildComponent {
  private _parent!: ParentComponent
  constructor(parent: ParentComponent) {
    this._parent=parent;
  }
  @Output() close=new EventEmitter();

  btnCloseClick() {
    this.close.emit();
    // this._parent.visible=false;
  }
}
