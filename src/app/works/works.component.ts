import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Works {
  name: string;
  type: string;
  link: string;
  linkName: string;
  href: string;
  description: string;
  services: string[];
  thumbnail: Image;
  problem: Problem;
  solution: Solution;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Problem {
  heading: string;
  desc: string;
  images: Image[];
}

export interface Solution {
  heading: string;
  desc: string;
  images: Image[];
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  worksData: Works[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWorksData();
  }

  fetchWorksData() {
    this.http.get<Works[]>('assets/works.json').subscribe(
      (data) => {
        this.worksData = data;
      },
      (error) => {
        console.error('Error fetching works data:', error);
      }
    );
  }
}
