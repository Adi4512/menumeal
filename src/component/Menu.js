import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Menu({ query }) {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`);
        setMeal(response.data.meals || []); // Ensure that if no meals are found, set an empty array
        setLoading(false); // Update loading state when data is fetched
      } catch (err) {
        console.log("error: ", err);
        setLoading(false); // Update loading state in case of an error
      }
    };

    fetchMeal();
  }, [query]);

  let itemsList;

  if (loading) {
    itemsList = <p>Loading...</p>;
  } else if (meal.length === 0) {
    itemsList = <p>No meals found for "{query}"</p>;
  } else {
    itemsList = meal.map(({ strMeal, strMealThumb, idMeal }) => (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt='mealimage'/>
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    ));
  }

  return (
    <div className="items-container">
      {itemsList}
    </div>
  );
}
