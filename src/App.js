import React, { useEffect, useState } from "react";
import './App.css';
import Recipes from './components/Recipes';

function App() {
  const APP_ID = "3a652c94"
  const APP_KEY = "d8e37b9850ccc2088a4dc36c7151d0c6"
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('pasta')

  useEffect(() => {
      getRecipes()
  }, [query])

  const getRecipes = async () => {
      const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&number=9`   
        );
      const data = await response.json();                 
      // console.log(data)
      setRecipes(data.hits)
      console.log(data)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getQuery =(e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <h1>Your Favourite Food Recipe</h1>
      <form className="search-form" onSubmit={getQuery}>
        <input className="search-bar" type="text" placeholder = "Search recipe" value={search} onChange={updateSearch}/>
        <input className="search-button" type="submit" value="Search"/>
      </form> 
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipes
            key={new Date().getTime.id} 
            title={recipe.recipe.label} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients} 
          />
        ))}
      </div> 
    </div>
  );
}

export default App;
