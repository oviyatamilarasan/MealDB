function About() {
  return (
    <div
      style={{
        width: "80%",
        margin: "40px auto",
        padding: "40px",
        textAlign: "center",
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
      }}
    >
      <h1
        style={{
          color: "#ff7b00",
          marginBottom: "20px"
        }}
      >
        About DineMeals 🍽️
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#333"
        }}
      >
        Welcome to <b>DineMeals</b>, your perfect place to discover
        delicious foods from around the world.
      </p>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#333"
        }}
      >
        Explore exciting recipes, tasty dishes, and unique cuisines
        with beautiful meal details and cooking instructions.
      </p>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#333"
        }}
      >
        Whether you love spicy street food, sweet desserts,
        or healthy meals, DineMeals helps you find your next favorite dish.
      </p>

      <img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        alt="Food"
        style={{
          width: "500px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "15px",
          marginTop: "25px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
      />

      <h3
        style={{
          marginTop: "25px",
          color: "#ff7b00"
        }}
      >
        🍕 Eat • Explore • Enjoy
      </h3>
    </div>
  );
}

export default About;