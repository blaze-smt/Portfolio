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
}
