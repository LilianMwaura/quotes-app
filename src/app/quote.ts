
export class Quote {
    showDescription: boolean;
    constructor(public id: number, public name: string, public quote: string,public upvotes: number, public downvotes: number, public authorName: string, public date: Date){
      this.showDescription=false;
    }
  } 

