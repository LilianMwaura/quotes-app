import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightVotr]'
})
export class HighlightVotrDirective {
  constructor(private elem: ElementRef) {}

  @HostListener("click") onClicks() {
    this.voteColor("yellow")
  }

  private voteColor(action: string) {
    this.elem.nativeElement.style.color = action;
  }

}

  
