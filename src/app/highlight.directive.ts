import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {}
  
  @HostListener("clicks") onUpvotes(){
    this.backgroundColor("yellow")
  }
  // @HostListener("u") onClick(){
  //   this.backgroundColor("None")
  // }

  private backgroundColor(action:any){
    this.elem.nativeElement.style.backgroundColor=action;
  }
}

    

