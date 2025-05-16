import { Link } from "react-router";
import { Users } from "../constants";

const User = () => {
  return (
    <div>
      <h1>Availabler Users</h1>

      {Users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button>
              <Link to={`/user/${id}`}>Click to visit a user's profile</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default User;
