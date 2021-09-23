




const Bookshelf = ({bookshelf}) => {
   
    return (
        <div className="card">
            <p>Bookshelf id: { bookshelf.id }</p>
            <p> Bookshelf belongs to {bookshelf.userid}</p>
            <p>Bookshelf Name: { bookshelf.name }</p>
            <p>Share what books are this bookshelf: { bookshelf.description }</p>
        </div>

    );
}
 
export default Bookshelf;