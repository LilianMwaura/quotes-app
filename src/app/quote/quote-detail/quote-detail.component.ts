import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input () quote!: Quote;
  @Output () isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upvotes(){
    this.quote.upvotes+=1;
  }
  downvotes(){
    this.quote.downvotes+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
