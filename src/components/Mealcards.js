import React from 'react'
import './Mealcards.css'
import { NavLink } from 'react-router-dom'

const Mealcards = ({detail}) => {
    console.log(detail)
  return (
    <div className='meals'>
      {!detail ?"":detail.map((currItem)=>{
        return(
            <div class="mealImg">
            <img src={currItem.strMealThumb} alt="..."/>
              <h5>{currItem.strMeal}</h5>
              <p>{currItem.strMeal}</p>
             <NavLink to={`/${currItem.idMeal}`}><button>Explore</button></NavLink>
             
            </div>

        )
      })
    
      }
    </div>
  )
}

export default Mealcards
