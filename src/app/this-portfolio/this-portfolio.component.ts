import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-this-portfolio',
  templateUrl: './this-portfolio.component.html',
  styleUrls: ['./this-portfolio.component.scss'],
})
export class ThisPortfolioComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Blaze Smith | This Portfolio');
  }

  ngOnInit(): void {}

  enlargeImage(e: Event): void {
    (e.target as HTMLElement).classList.toggle('enlarged-img');
    (e.target as HTMLElement).parentElement?.classList.toggle('section-image');
    (e.target as HTMLElement).parentElement?.classList.toggle(
      'blurred-background'
    );
  }
}
