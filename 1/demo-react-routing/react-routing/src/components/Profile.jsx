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
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>mucha dataaa</p>

      {users?.map((prop) => {
        return (
          <Person
            key={prop.id}
            id={prop.id}
            name={prop.name}
          />
        );
      })}
    </div>
  );
};

export default Profile;
