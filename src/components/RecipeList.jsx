import React from "react";

const RecipeList = ({ recipes, onSelect }) => {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found. Try different ingredients!</p>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
      {recipes.map((recipe) => (
        <div 
          key={recipe.idMeal} 
          style={{ border: "1px solid #ccc", padding: "1rem", cursor: "pointer" }}
          onClick={() => onSelect(recipe)}
        >
          <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: "100%" }} />
          <h3>{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
