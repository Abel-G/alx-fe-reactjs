import React, { useState, useEffect } from 'react';
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);
  
  return (
    <div className=' mx-auto'>
      <h1>Recipe List</h1>
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
        {recipes.map((recipe) => (
          <div key={recipe.id} className='shadow-lg rounded overflow-hidden hover:shadow-xl'>
            <img src={recipe.image} alt={recipe.title} className='w-full object-cover h-48'/>
            <div className='py-4'>
              <h2 className='font-bold'>{recipe.title}</h2>
              <p className='text-gray-400'>{recipe.summary}</p>
              <a href={`/recipes/${recipe.id}`} className='hover:text-blue-950'>View Recipe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
