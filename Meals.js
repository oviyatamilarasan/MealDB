import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Meals.css";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("letter");

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    setMeals(res.data.meals);
  };

  const handleSearch = async () => {
    let url = "";

    if (type === "letter") {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
    }

    else if (type === "category") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`;
    }

    else if (type === "area") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`;
    }

    const res = await axios.get(url);

    setMeals(res.data.meals || []);
  };

  return (
    <div className="meals-page">

      <h1>Meals</h1>

      <div className="search-box">

        <select onChange={(e) => setType(e.target.value)}>

          <option value="letter">First Letter</option>
          <option value="category">Category</option>
          <option value="area">Area</option>

        </select>

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

      <div className="meal-grid">

        {meals.map((meal) => (

          <div className="meal-card" key={meal.idMeal}>

            <Link to={`/meal/${meal.idMeal}`}>

              <img src={meal.strMealThumb} alt={meal.strMeal} />

              <h3>{meal.strMeal}</h3>

            </Link>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Meals;