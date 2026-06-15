import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MealDetails.css";

function MealDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMealDetails();
  }, []);

  const fetchMealDetails = async () => {

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    setMeal(res.data.meals[0]);
  };

  if (!meal) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-page">

      <button onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h1>{meal.strMeal}</h1>

      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <h3>Category: {meal.strCategory}</h3>

      <h3>Area: {meal.strArea}</h3>

      <p>{meal.strInstructions}</p>

    </div>
  );
}

export default MealDetails;