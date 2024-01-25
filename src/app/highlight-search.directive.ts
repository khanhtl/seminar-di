import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightSearch]',
  standalone: true
})
export class HighlightSearchDirective {
  @Input('appHighlightSearch') searchTerm: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.highlight();
  }

  private highlight() {
    const text=this.el.nativeElement.textContent;
    const arrText=text.split(this.searchTerm.trim());
    const hightLight=`<span class="highlight">${this.searchTerm}</span>`;
    const newText=arrText.join(hightLight);
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      newText
    );
  }
}
