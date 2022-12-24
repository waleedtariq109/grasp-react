import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </>
  );
};

export default NavBar;
