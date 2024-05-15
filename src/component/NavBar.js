// React-router lec-2 (Links,NabBar,Anchor Tag)
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
