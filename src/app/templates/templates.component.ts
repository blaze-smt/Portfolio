import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import productsData from './templates.json';

interface Products {
  name: String;
  type: String;
  link: String;
}

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit {
  products: Products[] = productsData;
  filteredProducts: Products[] = this.products;

  // Grabs filterbtn elements
  @ViewChildren('filterBtnProducts') filterBtns: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {}

  filterProducts(event: Event): void {
    // Checks if clicked element doesn't include 'active' class
    if (!(event.target as HTMLElement).classList.value.includes('active')) {
      // Loops through filter-btn elements
      for (let i = 0; i < this.filterBtns.toArray().length; i++) {
        // Checks if class has 'active' class on it
        if (
          this.filterBtns
            .toArray()
            [i].nativeElement.className.includes('active')
        ) {
          // If 'active' class is on. Replaces it with an empty string
          this.filterBtns.toArray()[i].nativeElement.className = this.filterBtns
            .toArray()
            [i].nativeElement.className.replace('active', '');
        }
      }
      (event.target as HTMLElement).classList.add('active');

      // Check if clicked element includes 'active' class
    } else if (
      (event.target as HTMLElement).classList.value.includes('active')
    ) {
      // Removes 'active' class
      (event.target as HTMLElement).classList.remove('active');
    }

    // Filters works array based on filter id
    if (
      // If filter-all or the clicked element doesnt include active reset the filteredWorks
      (event.target as HTMLElement).id == 'filter-all' ||
      !(event.target as HTMLElement).classList.value.includes('active')
    ) {
      this.filteredProducts = this.products;
    } else {
      // Filter works if target id matches type in this.works
      this.filteredProducts = this.products.filter(function (
        value,
        index,
        arr
      ) {
        return value.type.includes((event.target as HTMLElement).id);
      });
    }
  }
}
