import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className="navbar">
        <li>
          <NavLink
            className="text-red-500"
            to="/"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "green",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-red-500"
            to="/about-us"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "green",
              };
            }}
          >
            About
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
