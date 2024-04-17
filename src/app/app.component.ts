import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private trailElements: HTMLElement[] = [];

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.createCursorTrail();
  }

  createCursorTrail(): void {
    // Create trail element
    const trailElement = this.renderer.createElement('div');
    this.renderer.addClass(trailElement, 'trail');
    this.renderer.appendChild(this.elRef.nativeElement, trailElement);
    this.trailElements.push(trailElement);

    // Update trail elements position on mouse move
    this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
      this.trailElements.forEach((element) => {
        this.renderer.setStyle(element, 'top', `${event.pageY - 10}px`);
        this.renderer.setStyle(element, 'left', `${event.pageX - 10}px`);
      });
    });

    // Expand trail elements on mouse down
    this.renderer.listen('window', 'mousedown', (event: MouseEvent) => {
      this.trailElements.forEach((element) => {
        this.renderer.setStyle(element, 'transform', 'scale(2)'); // Enlarge the element
        this.renderer.setStyle(element, 'transition', 'transform 0.2s'); // Smooth transition for scaling
      });
    });

    // Revert trail elements to original size on mouse up
    this.renderer.listen('window', 'mouseup', (event: MouseEvent) => {
      this.trailElements.forEach((element) => {
        this.renderer.setStyle(element, 'transform', 'scale(1)'); // Revert to original size
      });
    });
  }
}
