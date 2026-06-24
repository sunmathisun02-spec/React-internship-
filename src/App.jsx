import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

const App = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const searchRecipes = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    setRecipes(data.meals || []);
    setSelectedRecipe(null);
  };

  const fetchRecipeDetail = async (recipe) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
    const data = await response.json();
    setSelectedRecipe(data.meals[0]);
  };

  return (
    <div>
      <Header />
      <main style={{ padding: "2rem" }}>
        <input 
          type="text" 
          placeholder="Enter an ingredient (e.g., chicken)" 
          value={ingredient} 
          onChange={(e) => setIngredient(e.target.value)} 
        />
        <button onClick={searchRecipes}>Search</button>

        <RecipeList recipes={recipes} onSelect={fetchRecipeDetail} />
        <RecipeDetail recipe={selectedRecipe} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
