import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const { recommendations, recipes } = useRecipeStore();

  const recommendedRecipes = recommendations.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  );

  return (
    <div>
      <h2>Recommendations for You</h2>
      {recommendedRecipes.length > 0 ? (
        <ul>
          {recommendedRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations yet. Try favoriting some recipes!</p>
      )}
    </div>
  );
};

export default RecommendationsList;