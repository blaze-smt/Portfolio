import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ntc-lego',
  templateUrl: './ntc-lego.component.html',
  styleUrls: ['./ntc-lego.component.scss'],
})
export class NtcLegoComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Blaze Smith | NTC Lego');
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
