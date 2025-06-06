'use client';
import React from "react"
// import {useState,useEffect} from "react"

export default function Food_B(){
  return(
    <section className = "browse-section">
      <h1>Browse Foods</h1>
      
      <div className="input-container">
        <div className="input-group">
          <label htmlfor="category">Category</label>
            <select id="category-select">
            <option value="">-- All Foods --</option>
            <option value="basic food">Basic Foods</option>
            <option value="brandeded food">Branded Foods</option>
            <option value="resturent food">Resturent Foods</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlfor="food-input">Search</label>
          <input type="text" id="food-input" />
        </div>

        <div className="input-group">
          <label htmlfor="sort-select">Sort By</label>
          <select id="sort-select">
            <option value=""> </option>
            <option value="calories">Calories</option>
            <option value="carbs">Carbs</option>
            <option value="fat">Fat</option>
            <option value="calcium">calcium</option>
            <option value="portein">Portein</option>
          </select>
        </div>
      </div>
    </section>
  );
} 
