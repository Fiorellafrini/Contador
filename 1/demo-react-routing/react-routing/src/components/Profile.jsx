import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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


const {id} = useParams()
// console.log(id);

const userFiltro = users.find((user) => user.id == id);


  return (
    <div>
      <h1>Profile</h1>
      <p>mucha dataaa</p>

      {/* {users?.map((user) => { */}
        {/* return ( */}
          <Person
            // key={userFiltro.id}
            id={userFiltro?.id}
            name={userFiltro?.name}
            city={userFiltro?.address.city}
          />
        {/* ) */}
      {/* })} */}
      
    </div>
  );
};

export default Profile;
