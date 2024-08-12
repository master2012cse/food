import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Mealinfo.css'


const Mealinfo = () => {
  const [info, setInfo] = useState(true); // Initialize state with null
  const { mealid } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await response.json();
        setInfo(jsonData.meals[0]);
  
      } catch (error) {
        console.error('Error fetching the meal info:', error);
      }
    };

    getInfo(); // Fetch the meal info when the component mounts
  }, [mealid]); // Dependency array includes mealid to re-run effect if mealid changes

  return (
    <div>
      <h1>Recipe detail</h1>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className='mealInfo'>
          <img src={info.strMealThumb} alt={info.strMeal} /> {/* Use the image URL */}
          <div className='info'>
            {/*<h1>Recipe detail</h1>*/}
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
