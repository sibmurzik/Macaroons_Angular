import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonEffect]'
})
export class ButtonEffectDirective implements OnInit {
  @Input() buttonEffectBackgroundColor: string = 'none';
  @Input() buttonEffectFocusBackgroundColor: string = 'blue';

  prevBackground : string = '';


  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onmouseenter(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-image', 'none');
    this.element.nativeElement.style.backgroundColor = this.buttonEffectFocusBackgroundColor;

  }

  @HostListener('mouseleave') onmouseleave(): void {
    if (this.buttonEffectBackgroundColor === 'none') {
      this.renderer.setStyle(this.element.nativeElement, 'background', this.prevBackground);
    }
    this.element.nativeElement.style.backgroundColor = this.buttonEffectBackgroundColor;

  }

  ngOnInit(): void {
    const computedStyle = getComputedStyle(this.element.nativeElement);
    this.prevBackground = computedStyle.getPropertyValue('background');
    console.log(this.prevBackground);
    if (this.buttonEffectBackgroundColor  !== 'none') {
      this.renderer.setStyle(this.element.nativeElement, 'background-image', 'none');
      this.renderer.setStyle(this.element.nativeElement, 'background-color', this.buttonEffectBackgroundColor);

    }

  }




}
