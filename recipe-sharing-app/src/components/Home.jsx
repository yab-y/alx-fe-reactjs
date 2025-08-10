import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function Home() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((r) => (
        <div key={r.id}>
          <Link to={`/recipes/${r.id}`}>{r.title}</Link>
        </div>
      ))}
    </div>
  );
}
