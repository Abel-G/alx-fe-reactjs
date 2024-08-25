import React from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard'; 
const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div>
      <SearchBar /> 
      <ul>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;