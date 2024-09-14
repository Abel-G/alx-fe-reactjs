import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
  }, [id]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  const { title, image, summary, ingredients, instructions } = recipe;
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
      <img src={image} alt={title} className="w-full h-96 object-cover rounded-lg mb-6" />
      <p className="text-lg mb-6 text-gray-700">{summary}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-800">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <p className="text-gray-800 whitespace-pre-wrap">{instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
