import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Book({book, updateBook, deleteBook, initialDelay=0}) {

    const [newBook, setNewBook] = useState({...book});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

      

    function handleChange(e) {
        const updatedValue = {...newBook}
        updatedValue[e.target.name] = e.target.value;
        setNewBook({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

   
    
    function handleUpdate(e) {
       e.preventDefault();
       updateBook(newBook);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(

    <div className="card">
      <Link to={`/books/${book.id}`}>
        <p>Book Title: {book.title}</p>
      </Link>
      <p>Author: {book.author}</p>
      <p>Year Book Published: {book.year_published}</p>
      <p>Description: {book.description}</p>
      <p>This book is number {book.id}. Use this unique number key to add this book to your own library bookshelf.</p>
      <img  className="ui medium rounded image" src={book.img_url} alt="" />
      {editMode && (
        <>
          <button onClick={() => deleteBook(book)}>Delete Book</button>

          <form onSubmit={handleUpdate}>
            <input name="title" value={newBook.title} onChange={handleChange} />
            <input name="author" value={newBook.author} onChange={handleChange} />
            <input name="year_published" value={newBook.year_published} onChange={handleChange} />
           
            <input
              name="description"
              value={newBook.description}
              onChange={handleChange}
            />
             <input name="year_published" value={newBook.year_published} onChange={handleChange} />
            <button type="submit">Update Book</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );



}