import { Link} from "react-router-dom";

const Navbar = () => {
    return (
       
        
                <div className="container-sm">
               <nav className="navbar d-flex justify-content-center fw-bolder">
                   <div className="links">
                       <Link to="/">Home</Link><br/>
                       <Link to="/AddBook">Add Book / </Link>
                       <Link to="/UserContainer">Users / </Link>
                       <Link to="/BookContainer">Library</Link>
                   </div>
               </nav>
               </div>
            );
        }


    
    

 
export default Navbar;