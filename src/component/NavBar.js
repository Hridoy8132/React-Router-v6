import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/about"> About </Link>
      <br />
      <Link to="/"> Home</Link>
    </div>
  );
}
export default NavBar;
