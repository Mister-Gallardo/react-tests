import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function users() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    response?.data && setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      {users.map(user => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </>
  );
}

export default users;
