import React, { useCallback, useState } from 'react'
import Mealcards from './Mealcards'
import './Mainpage.css'





const Mainpage = () => {


const [data,setData] = useState()
const [search,setSearch] = useState()
const [msg,setMsg] = useState("")

const handleInput = (event) =>{
    setSearch(event.target.value)
}

const myfun = async () =>{

if(search==""){
  setMsg("Please Enter Something")
}
else{
  const get =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  const jsonData = await get.json()
  //console.log(jsonData.meals)
  setData(jsonData.meals)
  //setMsg("Data not found")
}

}

//console.log(data);



  return (
    <>

    <h1 className='head'>FOOD RECIPE APP</h1>

     <div className='container'>
        <div className='searchbar'>
        <input type='text' placeholder='Enter disk' onChange={handleInput}/>
        <button onClick={myfun}>Search</button>
        </div>
        <h3 className='error'>{msg}</h3>
        <div>
            <Mealcards detail={data}/>
        </div>


     </div> 
    </>
  )
}

export default Mainpage
