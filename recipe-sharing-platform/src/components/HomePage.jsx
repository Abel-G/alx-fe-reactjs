import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);
  
  return (
    <div className=' mx-auto'>
      <h1>Recipe List</h1>
      <div className='mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {recipes.map((recipe) => (
          <div key={recipe.id} className='shadow-lg rounded overflow-hidden hover:shadow-xl'>
            <img src={recipe.image} alt={recipe.title} className='w-full object-cover h-48'/>
            <div className='py-4'>
              <h2 className='font-bold'><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h2>
              <p className='text-gray-400'>{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:text-blue-700">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
