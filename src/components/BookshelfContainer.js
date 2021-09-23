import { useState, useEffect } from "react";
import { BASE_URL } from "../constraints";

const BookshelfContainer = () => {

        const [bookshelves, setBookshelves] = useState(null);

  // READ
  useEffect (() => {
    fetch(BASE_URL + "booksshelves")
    .then(res => res.json())
    .then(json => setBookshelves(json))
  }, []);

  function populateBookshelves() {
    return bookshelves.map(bookshelf => <Bookshelf bookshelf={bookshelf} updateBookshelf={updateBookshelf} deleteBookshelf={deleteBookshelf} key={bookshelf.id} />)
  }

  function deleteBookshelf(bookshelf) {
    fetch(BASE_URL + 'bookshelves/' + bookshelf.id, {
      method: "DELETE"
    })
    const newBookshelves = bookshelves.filter(nbooksh => nbooksh.id !== bookshelf.id)
    setBookshelves(newBookshelves)
 
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
    const newBookshelves = bookshelves.map (nbooksh => {
      if (nbooksh.id === bookshelf.id) {
        nbooksh = bookshelf
      }
      return nbooksh
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