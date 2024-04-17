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

  isHeaderVisible = true;
  lastScrollOffset = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _router: Router,
    private renderer: Renderer2
  ) {
    window.addEventListener('scroll', () => {
      this.toggleHeaderVisibility();
    });
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
    this.toggleBodyScroll();
  }

  toggleBodyScroll(): void {
    if (this.status) {
      this.renderer.removeClass(this.document.documentElement, 'lock-scroll');
    } else {
      this.renderer.addClass(this.document.documentElement, 'lock-scroll');
    }
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
      this.toggleBodyScroll();
    }

    if (this._router.url == '/') {
      this.navigateToElement(id);
    } else {
      this._router.navigate(['/']).then(() => {
        // Wait for the view to refresh and data to load
        setTimeout(() => {
          this.navigateToElement(id);
        }, 1400); // Adjust the delay as needed
      });
    }
  }

  private navigateToElement(id: string) {
    const element = this.document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleHeaderVisibility() {
    const currentScrollOffset = window.pageYOffset;
    const scrollDown = currentScrollOffset > this.lastScrollOffset;

    this.isHeaderVisible = !scrollDown || currentScrollOffset < 10;

    this.lastScrollOffset = currentScrollOffset;
  }
}
