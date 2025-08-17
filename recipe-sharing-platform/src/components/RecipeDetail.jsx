import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-8">Recipe not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients
              ? recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)
              : <li>No ingredients listed.</li>}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.steps
              ? recipe.steps.map((step, index) => <li key={index}>{step}</li>)
              : <li>No instructions provided.</li>}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;
