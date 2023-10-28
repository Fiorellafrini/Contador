import { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";

const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setUsers([...users, ...data]);
      })
      .catch(() => {
        console.log("se rompio");
      });

    return () => {
      setUsers([]);
      console.log(users);

      //   console.log("se desmonto");
    };
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>mucha dataaa</p>

      {users?.map((user) => {
        return (
          <Person
            key={user.id}
            id={user.id}
            name={user.name}
            city={user.address.city}
          />
        );
      })}
    </div>
  );
};

export default Profile;
