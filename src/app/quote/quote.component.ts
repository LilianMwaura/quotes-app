import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code." ,0 ,0, "-Martin fowler"),
    new Quote(2, "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live." ,3 ,0,"-Oscar Wilde"),
    new Quote(3, "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." ,0 ,0,"-Francis Bacon"),
    new Quote(4, "Software and cathedrals are much the same — first we build them, then we pray." ,0 ,0,"-Chris Heilmann")
  ]
  arr : number [] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max (...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
