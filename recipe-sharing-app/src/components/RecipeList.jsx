import React from 'react';
import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom';
import {RecipeDetails} from './RecipeDetails'
const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div>
      <SearchBar /> 
      <ul>
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <RecipeDetails />
        </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;