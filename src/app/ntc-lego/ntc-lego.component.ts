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
}
