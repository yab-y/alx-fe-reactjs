import React from 'react';
import { useRecipeStore } from './recipeStore';

export default function SearchBar() {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '8px', width: '100%', maxWidth: 400, marginBottom: 20 }}
    />
  );
}
