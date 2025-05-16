import { Link } from "react-router";

const NotFound = () => {
  return (
    <div
      style={{
        alignContent: "center",
        flexDirection: "column",
        height: "70vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "red" }}>404 - Page Not Found!</h1>
      <Link
        to="/"
        style={{ marginTop: "1rem", color: "blue", textDecoration: "none" }}
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
