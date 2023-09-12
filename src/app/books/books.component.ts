import { Component, OnInit } from '@angular/core';
import booksData from './books.json';

interface Book {
  name: String;
  link: String;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  selfImprovement: Book[] = booksData.selfImprovement;
  creativity: Book[] = booksData.creativity;
  spiritual: Book[] = booksData.spiritual;
  financial: Book[] = booksData.financial;

  constructor() {}

  ngOnInit(): void {}
}
