import React from "react";

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: "300px" }} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
