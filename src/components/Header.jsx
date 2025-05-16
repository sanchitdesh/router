import { NavLink } from "react-router";
import { Link, Outlet } from "react-router";
import "../styles.css";

const Header = () => {
  const styleList = {
    textDecoration: "none",
    listStyle: "none",
    color: "black",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ccc",
          padding: "0px 18px",
        }}
      >
        <h1>Logo.</h1>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
          }}
        >
          <li>
            <NavLink style={styleList} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={styleList} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={styleList} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink style={styleList} to="/user">
              User
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
