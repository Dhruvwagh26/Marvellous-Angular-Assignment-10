import { style } from '@angular/animations';
import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.background = "yellow";
    this.obj.nativeElement.style.fontWeight = 'bold';
    this.obj.nativeElement.style.fontSize = '3rem';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.background = "";
    this.obj.nativeElement.style.fontWeight = "";
    this.obj.nativeElement.style.fontSize = '1.5rem';
  }

}
