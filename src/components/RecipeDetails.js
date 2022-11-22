import React from "react";

const RecipeDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {
      return (
        <ul key={Math.floor(Math.random()*10000)} className="ingredient-list">
          <li className="ingredient-text">{ingredient.text}</li>
        </ul>
      );
    });
  };
  
  export default RecipeDetails;