import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import DineHome from "./DineHome";
import Meals from "./Meals";
import './DineHeader.css';


function DineHeader() {
    return (
    <header className="dine-header">

      <h2>DineMeals</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/about">About</Link>
      </nav>

    </header>
  );
}

export default DineHeader;