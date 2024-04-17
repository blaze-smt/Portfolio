import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  private trailElements: HTMLElement[] = [];

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {
    this.titleService.setTitle('Blaze Smith | Designer');
  }

  ngAfterViewInit(): void {}
}
