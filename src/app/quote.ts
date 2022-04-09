// export class Quote {
//     id!: number;
//     quote!: string;
//     upvotes!: number;
//     downvotes!: number;
//     description!: string;
    
//     constructor (id: number, quote: string, upvotes: number, downvotes: number,description:string){
//         this.id = id;
//         this.quote = quote;
//         this.upvotes = upvotes;
//         this.downvotes = downvotes;
//         this.description = description
//     }
// }
export class Quote {
    showDescription: boolean;
    constructor(public id: number, public name: string, public quote: string,public upvotes: number, public downvotes: number, public author: string){
      this.showDescription=false;
    }
  } 

