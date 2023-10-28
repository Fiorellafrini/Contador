import { Link, NavLink } from "react-router-dom";

//la difenrecia es que navlink se le puede agragar stilos, a link no.

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>

      <button>
        <Link to="/about">ir a about</Link>
      </button>

      <button>
        <NavLink
          to="/profile"
          style={({ isActive }) =>
            isActive ? { background: "green" } : { background: "red" }
          }
        >
          ir a profile
        </NavLink>
      </button>
    </div>
  );
};

export default Home;
