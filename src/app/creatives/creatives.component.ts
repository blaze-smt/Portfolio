import { Component, OnInit } from '@angular/core';
import creativesData from './creatives.json';

interface Creative {
  name: String;
  link: String;
}

@Component({
  selector: 'app-creatives',
  templateUrl: './creatives.component.html',
  styleUrls: ['./creatives.component.scss'],
})
export class CreativesComponent implements OnInit {
  creatives: Creative[] = creativesData;

  constructor() {}

  ngOnInit(): void {}
}
