import React, { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div>
      {users.map(user => {
        return <Person person={user} />;
      })}
    </div>
  );
}

export default App;
