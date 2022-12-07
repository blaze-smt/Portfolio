import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

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
    const element = this.document.getElementById(id);
    this.scrollToElement(element as HTMLElement);
  }
}
