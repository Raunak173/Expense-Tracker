import React from "react";
import Expenses from "../../Components/Expenses/Expenses";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className="app-container">
        <div className="app-header">
          <input
            className="search-box"
            type="text"
            placeholder="Search for expenses"
          />
          <Link to='/add-exp'>
            <button className="add-btn">ADD</button>
          </Link>
        </div>
        <Expenses exp="Bought books" cost="400 Rs"/>
        <Expenses exp="Eaten a Pizza" cost="300 Rs"/>
        <Expenses exp="Took a Cab" cost="70 Rs"/>
        <Expenses exp="Watched a movie" cost="250 Rs"/>
      </div>
  );
};

export default Home;
