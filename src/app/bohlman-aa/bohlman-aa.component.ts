import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bohlman-aa',
  templateUrl: './bohlman-aa.component.html',
  styleUrls: ['./bohlman-aa.component.scss'],
})
export class BohlmanAaComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Blaze Smith | Bohlman Auto Aesthetics');
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
