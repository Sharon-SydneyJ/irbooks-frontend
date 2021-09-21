import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constraints";
import Book from "./Book";



export default function BookContainer() {

    const { id } = useParams();
    const [books, setBooks] = useState(null);
    const [error, setError] = useState(null);


    //READ
    useEffect(() => {
        fetch(BASE_URL + "books")
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch data');
          }
          return res.json();
        })
        .then(data => {
          setBooks(data);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
    
          setError(err.message);
          }
        })
        
        }, 

       [id]);

       function populateBooks() {
        return books.map(book => <Book book={book} updateBook={updateBook} deleteBook={deleteBook} key={book.id}/>
        )

      }

       
        //  UPDATE
       
       function updateBook(book) {
           fetch(BASE_URL + "books/" + book.id, {
               method: "PUT",
               body: JSON.stringify(book),
               headers: {
              "Accept": "applicaton/json",
              "Content-Type": "application/json",
              },
           });

           const newBooks = books.map ((nbook) => {
               if (nbook.id === book.id) {
                   nbook = book
               }
               return nbook;
           });
           setBooks(newBooks);
        }

             // DELETE

         function deleteBook(book) {
          fetch(BASE_URL + "gyms/" + book.id, {
                method: "DELETE",
             })
        const newBooks = books.filter(nbook => nbook.id !== book.id);
           setBooks(newBooks);
         }
       

    return (
      
        
    
  
      
      <div className="book-container">

      { error && <div>{ error }</div> }
     
       
           <article>
               <h2>Library</h2>
               
               {books && populateBooks()}
               
               </article>
               </div>
    
);
    }
