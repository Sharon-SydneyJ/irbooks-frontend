import { Link } from "react-router-dom";

export default function BookList({ books, title }) {

    return (
         <div className="books-list">
             <h2>{ title }</h2>
             {books.map((book) => (
                 <div className="books-preview" key={ book.id }>
                     <Link to={`/books/${book.id}` }>
                     <h3>{book.title}</h3>
                     <p>Written by: { book.author }</p>
                     </Link>
                     </div>
                     ))}
         </div>
         );
             }
        
