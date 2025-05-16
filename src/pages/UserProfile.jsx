import { NavLink } from "react-router";
import { useParams } from "react-router";

const UserProfile = () => {
  const { id } = useParams();

  const styledId = {
    color: "red",
    fontSize: "28px",
    fontWeight: "900",
  };

  console.log(id);
  return (
    <div>
      <h1>User Profile of Current User</h1>

      <h2>
        UserId: <span style={styledId}>{id}</span>
      </h2>

      <NavLink to="/user">Go Back to User Page</NavLink>
    </div>
  );
};

export default UserProfile;
