import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Hook to navigate after delete

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert('Recipe deleted successfully!');
    navigate('/'); // ✅ Redirect back to home after deletion
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
}
//