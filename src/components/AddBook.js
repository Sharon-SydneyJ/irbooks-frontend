import { useState } from "react";



const AddBook = () => {
    const [img_url, setImg_url] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year_published, setYear_published] = useState('');
    const [description, setDescription] = useState('');
    // const [read, setRead] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { img_url, title, author, year_published, description};

        // CREATE

        fetch('http://localhost:3000/books', {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
            }).then(() => {
            console.log('new book posted');
        
           
        })

    }
    
    return (
        <div className="post-books">
            <h2>Add a New Book to our Library </h2>
            <p>Type your book information in the input fields below. <br />
            Next, click the "Submit Your Book" button when completed. <br />
            Finally, click the home link above; scroll down to view and click your newly submitted book. </p>
            <br />
            
            <form onSubmit={ handleSubmit }>
                <label className="form-label">Book title:</label>
                <input 
                type="text"
                placeholder="Type book title here ..."
                required
                value={ title }
                onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <br />

                <label>Book Author:</label>
                <input
                type="text"
                placeholder="Type Author..."
                required
                value={ author }
                onChange={(e) => setAuthor(e.target.value)}
                />
                <br />
                <br />

                <label form="exampleFormControlTextarea1" className="form-label">What's this book about?:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"
                placeholder="Type Book info ..."
                  required
                  value={ description }
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <br />
                <br />

                <label>What year was this book published?</label>
                <input
                type="integer"
                placeholder="Year published(optional)..."
                required
                value={ year_published }
                onChange={(e) => setYear_published(e.target.value)}
                />
                <br />
                <br />


                 <label>(Opitional) Add Book Image Link:</label>
                <input
                type="text"
                placeholder="Enter image URL(optional)..."
                value={ img_url }
                onChange={(e) => setImg_url(e.target.value)}
                />
                <br />
                <br />
                <button>Add Book</button>
                <br />
                <br />
                <p>Book Title: { title }</p>
                <p>Book Author: { author }</p>
                <p>Book Description: { description }</p>
                <p>Year Published: { year_published }</p>
                <p>Book Image Optional: <img src={img_url} alt={""} /></p>
               
            </form>
        </div>
    );
}
 
export default AddBook;
