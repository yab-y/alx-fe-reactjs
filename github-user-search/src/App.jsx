import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import { searchUsers } from './services/githubApi';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    const results = await searchUsers(searchTerm);
    setUsers(results);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>GitHub User Search</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <UserList users={users} />
    </div>
  );
}
