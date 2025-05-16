import { NavLink, Outlet, Link } from "react-router";

const Contact = () => {
  const navStyles = {
    listStyle: "none",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "8px 14px",
    background: "black",
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1>Contact</h1>

      <Link to="/">Go Back to Home</Link>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink style={navStyles} to="customer-care">
          Customer Care
        </NavLink>
        <NavLink style={navStyles} to="dental-care">
          Dental Care
        </NavLink>
        <NavLink style={navStyles} to="operation-care">
          Operation Care
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;
