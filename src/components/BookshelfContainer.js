import { useState, useEffect } from "react";
import { BASE_URL } from "../constraints";

const BookshelfContainer = () => {

        const [bookshelves, setBookshelves] = useState(null);

  // READ
  useEffect (() => {
    fetch(BASE_URL + "booksshelves/" + id)
    .then(res => res.json())
    .then(json => setBookhelf(json))
  }, [id]);

  function populateBookshelves() {
    return bookshelves.map(bookshelf => <Bookshelf bookshelf={bookshelf} updateBookshelf={updateBookshelf} key={bookshelf.id} />)
  }

  
 
// UPDATE
  function updateBookshelf(bookshelf) {
    fetch(BASE_URL + 'bookshelves/' + bookshelf.id, {
      method:"PUT",
      body: JSON.stringify(bookshelf),
      headers: {
        "Accept": "applicaton/json",
        "Content-Type": "application/json"
      }
    })
    const newBookshelves = bookshelves.map (nbookshelf => {
      if (nbookshelf.id === bookshelf.id) {
        nbookshelf = bookshelf
      }
      return nbookshelf
    })
    setBookshelves(newBookshelves)
  }

 

  return(
    <div>
      {bookshelves && populateBookshelves}

    </div>
    
  );
}

        


 
export default BookshelfContainer;