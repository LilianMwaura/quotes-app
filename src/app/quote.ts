export class Quote {
    id: number;
    quote: string;
    upvotes: number;
    downvotes: number;
    description: string;
    
    constructor (id: number, quote: string, upvotes: number, downvotes: number,description:string){
        this.id = id;
        this.quote = quote;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.description = description
    }
}
    

