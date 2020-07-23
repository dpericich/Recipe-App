import React from 'react';
import style from './recipe.module.css'

const Recipe = ({calories, title, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.recipieTitle}>{title}</h1>
            <img src={image} alt={title} />
            <ol>
                {ingredients.map(ingredient => <li>{ingredient.text}</li>)}
            </ol>
            <p className={style.calories}>Calories: {Math.ceil(calories)}</p>
        </div>
    )
}

export default Recipe;