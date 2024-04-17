import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Works } from '../works/works.component';

@Component({
  selector: 'app-empty-space',
  templateUrl: './empty-space.component.html',
  styleUrls: ['../../assets/css/projects/project.scss'],
})
export class EmptySpaceComponent implements OnInit {
  worksData: Works;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWorksData();
  }

  fetchWorksData() {
    this.http.get<Works[]>('assets/works.json').subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.worksData = data[0];
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
