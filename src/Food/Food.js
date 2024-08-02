import React, { useEffect, useState } from "react";
import "./Food.css";
import "bootstrap/dist/css/bootstrap.css";

function Food() {
  const [recipies, setRecipies] = useState([]);
  const apikey = process.env.REACT_APP_API_KEY_FOOD;
  console.log(apikey);
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&includeNutrition=true`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setRecipies(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="foods">
      <div className="row list">
        {recipies.map((rec) => (
          <div key={rec.id} className="card shadow p-3 recipe-card col-3 m-3">
            <img src={rec.image} alt={rec.title} width="100%" />
            <h3>{rec.title}</h3>
            <p>ID: {rec.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
