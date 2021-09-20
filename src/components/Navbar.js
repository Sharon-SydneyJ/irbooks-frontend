import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       
       <nav className="navbar">
           
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/User">Users</Link>
               <Link to="/AddBook">Add Book</Link>
               
               
           </div>
       </nav>
    
    
    );
}
 
export default Navbar;