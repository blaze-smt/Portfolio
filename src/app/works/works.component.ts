import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import worksData from './works.json';

interface Works {
  name: String;
  type: String;
  link: String;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  works: Works[] = worksData;
  filteredWorks: Works[] = this.works;

  // Grabs filterbtn elements
  // @ViewChildren('filterBtnWorks') filterBtns: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {}

  // filterWorks(event: Event): void {
  //   // Checks if clicked element doesn't include 'active' class
  //   if (!(event.target as HTMLElement).classList.value.includes('active')) {
  //     // Loops through filter-btn elements
  //     for (let i = 0; i < this.filterBtns.toArray().length; i++) {
  //       // Checks if class has 'active' class on it
  //       if (
  //         this.filterBtns
  //           .toArray()
  //           [i].nativeElement.className.includes('active')
  //       ) {
  //         // If 'active' class is on. Replaces it with an empty string
  //         this.filterBtns.toArray()[i].nativeElement.className = this.filterBtns
  //           .toArray()
  //           [i].nativeElement.className.replace('active', '');
  //       }
  //     }
  //     (event.target as HTMLElement).classList.add('active');

  //     // Check if clicked element includes 'active' class
  //   } else if (
  //     (event.target as HTMLElement).classList.value.includes('active')
  //   ) {
  //     // Removes 'active' class
  //     (event.target as HTMLElement).classList.remove('active');
  //   }

  //   // Filters works array based on filter id
  //   if (
  //     // If filter-all or the clicked element doesnt include active reset the filteredWorks
  //     (event.target as HTMLElement).id == 'filter-all' ||
  //     !(event.target as HTMLElement).classList.value.includes('active')
  //   ) {
  //     this.filteredWorks = this.works;
  //   } else {
  //     // Filter works if target id matches type in this.works
  //     this.filteredWorks = this.works.filter(function (value, index, arr) {
  //       return value.type.includes((event.target as HTMLElement).id);
  //     });
  //   }
  // }
}
