import "./DineHome.css";

function DineHome() {
  return (
    <div className="home-page">

      <h1>Welcome to DineMeals 🍽️</h1>

      <p>
        Discover delicious foods from different countries and cultures.
      </p>

      <p>
        Explore tasty meals, unique recipes, and amazing dishes all in one place.
      </p>

      {/* Center Food Image */}
      <img
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
        alt="Food"
        className="home-img"
      />

      <h3>🍔 Explore Your Favorite Meals Now!</h3>

    </div>
  );

}

export default DineHome;