import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: 8, width: '300px' }}
      />
      <button type="submit" style={{ marginLeft: 8 }}>Search</button>
    </form>
  );
}
