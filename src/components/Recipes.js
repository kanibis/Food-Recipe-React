import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

function Recipes({key, title, image, ingredients}) {
    const [show, setShow] = useState(false)

    return (
        <div className="recipe">
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <div>
                <button onClick={() => setShow(!show)}>
                    Get Ingredients <i class="fas fa-arrow-right"></i>
                </button>
                {show && <RecipeDetails ingredients={ingredients}/>}
            </div>
        </div>
    )
}

export default Recipes