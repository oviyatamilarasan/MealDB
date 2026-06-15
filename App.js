import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import DineHeader from "./components/DineHeader";
import DineFooter from "./components/DineFooter";

import Home from "./components/DineHome";
import Meals from "./components/Meals";
import MealDetails from "./components/MealDetails";
import About from "./components/About";

function App() {
  return (
    <Router>

      <DineHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <DineFooter />

    </Router>
  );
}

export default App;