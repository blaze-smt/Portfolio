import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('togglerText') togglerText: ElementRef;
  @ViewChild('togglerIcon') togglerIcon: ElementRef;
  @ViewChild('i1') i1: ElementRef;
  @ViewChild('i2') i2: ElementRef;
  @ViewChild('navbarMobile') navbarMobile: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _router: Router,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.togglerText.nativeElement &&
        e.target !== this.togglerIcon.nativeElement &&
        e.target !== this.i1.nativeElement &&
        e.target !== this.i2.nativeElement &&
        e.target !== this.navbarMobile.nativeElement
      ) {
        this.status = true;
      }
    });
  }

  ngOnInit(): void {}

  status = true;
  toggleNav(): void {
    this.status = !this.status;
  }

  scrollToElement(pageElement: HTMLElement) {
    var positionX = 0,
      positionY = 0;

    while (pageElement != null) {
      positionX += pageElement.offsetLeft;
      positionY += pageElement.offsetTop;
      pageElement = pageElement.offsetParent as HTMLElement;
      window.scrollTo(positionX, positionY);
    }
  }

  scrollPosition(id: string) {
    if (!this.status) {
      this.toggleNav();
    }

    if (this._router.url == '/') {
      const element = this.document.getElementById(id);
      this.scrollToElement(element as HTMLElement);
    } else {
      this._router.navigate(['/']).then(() => {
        // do whatever you need after navigation succeeds
        const element = this.document.getElementById(id);
        this.scrollToElement(element as HTMLElement);
      });
    }
  }
}
