import React, { useState, useEffect } from 'react';
import Mealcards from './Mealcards';
import './Mainpage.css';

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  // Fetch initial data when the component mounts
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const jsonData = await response.json();
        setData(jsonData.meals || []);
      } catch (error) {
        setMsg("An error occurred while fetching initial data");
      }
    };
    fetchInitialData();
  }, []);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myfun = async () => {
    if (search === "") {
      setMsg("Please Enter Something");
    } else {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await response.json();
        setData(jsonData.meals || []); // Set data to an empty array if no meals are found
        setMsg(jsonData.meals ? "" : "Data not found");
      } catch (error) {
        setMsg("An error occurred while fetching data");
      }
    }
  };

  return (
    <>
      <h1 className='head'>FOOD RECIPE APP</h1>

      <div className='container'>
        <div className='searchbar'>
          <input type='text' placeholder='Enter dish' onChange={handleInput} />
          <button onClick={myfun}>Search</button>
        </div>
        <h3 className='error'>{msg}</h3>
        <div>
          <Mealcards detail={data} />
        </div>
      </div> 
    </>
  );
};

export default Mainpage;
