import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Works, Image } from '../works/works.component';

@Component({
  selector: 'app-gen-fram',
  templateUrl: './gen-fram.component.html',
  styleUrls: ['../../assets/css/projects/project.scss'],
})
export class GenFramComponent implements OnInit {
  worksData: Works;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWorksData();
  }

  fetchWorksData() {
    this.http.get<Works[]>('assets/works.json').subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.worksData = data[2];
        } else {
          console.error('No data found in the JSON file');
        }
      },
      (error) => {
        console.error('Error fetching works data:', error);
      }
    );
  }
}
