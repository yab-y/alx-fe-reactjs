import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title, description });
    alert('Recipe added!');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
