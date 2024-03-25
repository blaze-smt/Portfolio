import { Component, OnInit } from '@angular/core';

import testimonialsData from './testimonials.json';

interface Testimonials {
  name: String;
  image: String;
  review: String;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonials[] = testimonialsData;

  constructor() {}

  ngOnInit(): void {}
}
