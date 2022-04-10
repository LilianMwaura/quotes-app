import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "Wambui","Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code." ,0,0, "-Martin fowler",new Date (2021,3,12)),
    new Quote(2, "Joe", "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live." ,0 ,0,"-Oscar Wilde",new Date (2021,7,16)),
    new Quote(3, "Mweru","Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." ,0 ,0,"-Francis Bacon",new Date (2022,2,10)),
    new Quote(4, "Hulda", "Software and cathedrals are much the same — first we build them, then we pray." ,0 ,0,"-Chris Heilmann",new Date (2020,4,9))
  ]
  arr : number [] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max (...this.arr)

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.Date = new Date(quote.Date)
    this.quotes.push(quote)
  }
  deleteQuote (isComplete :any, index: any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete post by ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
