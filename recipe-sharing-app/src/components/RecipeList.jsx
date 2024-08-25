import React from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard'; 
import { Link } from 'react-router-dom';
const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div>
      <SearchBar /> 
      <ul>
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <RecipeCard recipe={recipe} />
        </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;