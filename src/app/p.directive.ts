import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appP]'
})
export class PDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
 }

}
