import {
  Component,
  AfterViewInit,
  Renderer2,
  ElementRef,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private trailElements: HTMLElement[] = [];

  constructor(
    private zone: NgZone,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this.createCursorTrail();
  }

  createCursorTrail(): void {
    const trailElement = this.renderer.createElement('div');
    this.renderer.addClass(trailElement, 'trail');
    this.renderer.appendChild(this.elRef.nativeElement, trailElement);
    this.trailElements.push(trailElement);

    this.zone.runOutsideAngular(() => {
      this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
        this.trailElements.forEach((element) => {
          this.renderer.setStyle(element, 'top', `${event.pageY - 10}px`);
          this.renderer.setStyle(element, 'left', `${event.pageX - 10}px`);
        });
      });

      this.renderer.listen('window', 'mousedown', (event: MouseEvent) => {
        this.trailElements.forEach((element) => {
          this.renderer.setStyle(element, 'transform', 'scale(2)');
          this.renderer.setStyle(element, 'transition', 'transform 0.2s');
        });
      });

      this.renderer.listen('window', 'mouseup', (event: MouseEvent) => {
        this.trailElements.forEach((element) => {
          this.renderer.setStyle(element, 'transform', 'scale(1)');
        });
      });
    });
  }
}
