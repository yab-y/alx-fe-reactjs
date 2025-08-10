import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

export default function RecipeDetails() {
  const { id } = useParams(); // Get recipe ID from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === id) // ✅ Checks recipe.id
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Edit & Delete Components */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />

      <Link to="/">⬅ Back to Recipes</Link>
    </div>
  );
}
