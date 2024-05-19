// React-router lec-2 (Links,NabBar,Anchor Tag)
// Lec-5 Replace link to Navlink and design Navbar.
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="navbar">
        <li> <NavLink className ="nablink" to="/"> Home</NavLink> </li>
        <li> <NavLink className ="nablink" to="/about"> About </NavLink>  </li>
        <li> <NavLink className ="nablink" to="/contact"> Contact </NavLink> </li>
        <li> <NavLink className ="nablink" to="/filter"> Filter </NavLink> </li>
      </ul>
      
      
      
      
      <br />
      
    </div>
  );
}
export default NavBar;
