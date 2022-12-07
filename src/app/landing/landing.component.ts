import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

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
