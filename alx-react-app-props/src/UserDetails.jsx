import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetails;
