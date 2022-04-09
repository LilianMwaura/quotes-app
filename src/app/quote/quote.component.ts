import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,"First quote" ,0 ,0),
    new Quote(2, "Second quote" ,3 ,0),
    new Quote(3, "Third quote" ,0 ,0),
    new Quote(4, "Fourth quote" ,0 ,0)
  ]
  arr : number [] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max (...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
