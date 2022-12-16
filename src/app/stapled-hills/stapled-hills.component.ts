import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stapled-hills',
  templateUrl: './stapled-hills.component.html',
  styleUrls: ['./stapled-hills.component.scss'],
})
export class StapledHillsComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Blaze Smith | Stapled Hills');
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
