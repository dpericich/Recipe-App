import React, { useState } from 'react';
import style from './recipe.module.css'

const Recipe = ({calories, title, image, ingredients}) => {
    const [isSelected, setSelected] = useState(false)

    const showIngredients = () => {
        setSelected(!isSelected)
    }

    const toggleIngredientsButtonText = () => {
        return isSelected ? "Hide Ingredients" : "Show Ingredients"
    }

    return (
        <div className={style.recipe}>
            <h1 className={style.recipieTitle}>{title}</h1>
            <img src={image} alt={title} />
            <button onClick={showIngredients}>{toggleIngredientsButtonText()}</button>
            {isSelected && <ol>
                {ingredients.map(ingredient => <li>{ingredient.text}</li>)}
            </ol> }
            <p className={style.calories}>Calories: {Math.ceil(calories)}</p>
        </div>
    )
}

export default Recipe;