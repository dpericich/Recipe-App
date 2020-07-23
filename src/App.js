import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = "776844a4";
  const APP_KEY = "38474bf816e0b9169b9abbff488153b2	";

  const [recipes, setRecipes] = useState([]);
  const [term, setTerm] = useState("");
  const [query, setQuery] = useState('tacos');
  const [ingredients, setIngredients] = useState(false);
    
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateTerm = e => {
    setTerm(e.target.value)
    console.log(term)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(term);
    setTerm("")
  }

  return (
    <div className="App">
      <h1 className="website-title">Daniel's Good Eats</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input 
          type="text" 
          className="search-bar" 
          value={term} onChange={updateTerm} 
          placeholder="Search for Recipes Here!"
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
        ))}
      </div>
    </div>
  )
}

export default App;
