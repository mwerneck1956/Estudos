import React, { useEffect, useState } from "react";
import api from "./services/api";
import User from './components/UserProfile'

interface User {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    api.get<User[]>("/users").then((response) => {
      console.log('fala ai ')
      setUsers(response.data);
    });
  }, []);
  return (
    <div className="App">
      {users.map((user) => (
        <User key={user.email} user={user} ></User>
      ))}
    
    </div>
  );
}

export default App;
