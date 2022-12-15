import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  status: boolean = true;
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
