import React from "react";

interface User {
  name: string;
  email: string;
}

interface Props {
  user: User;
}

const UserProfile: React.FC<Props> = ({ user ,children }) => {
  return (
    <div>
      <strong>Nome : {user.name}</strong>
      <br />
      <strong>Email : {user.email}</strong>
    </div>
  );
};


export default UserProfile;
