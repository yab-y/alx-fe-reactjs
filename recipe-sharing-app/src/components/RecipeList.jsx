import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';

export default function RecipeList() {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h1>Recipes</h1>
      <SearchBar />
      {filteredRecipes.length === 0 && <p>No recipes found.</p>}
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </div>
      ))}
    </div>
  );
}
