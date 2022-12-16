import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Blaze Smith | Web Designer');
  }

  ngAfterViewInit(): void {}
}
