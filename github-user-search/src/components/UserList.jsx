import React from 'react';

export default function UserList({ users }) {
  if (!users || users.length === 0) return <p>No users found.</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} style={{ marginBottom: 12 }}>
          <img src={user.avatar_url} alt={user.login} width={50} style={{ borderRadius: '50%' }} />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 12 }}>
            {user.login}
          </a>
        </li>
      ))}
    </ul>
  );
}
