import { Book } from './models/book.interface';
export class BooksDashboardService{
    constructor(){}

    getBooks(): Book[]{
        return[
            {
                id:1,
                title:'Node Fundamentals',
                published:14657774,
                instock:false
            },
            {
                id:2,
                title:'HTML Fundamentals',
                published:14657774,
                instock:false
            },
            {
                id:3,
                title:'JS Fundamentals',
                published:14657774,
                instock:true
            }
        ]
    }
}